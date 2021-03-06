/* eslint-disable @typescript-eslint/no-var-requires */
import { StyleSheet, css } from 'aphrodite-jss';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import PageRoot from '../../../../components/layout/PageRoot';
import NextPageTouchArea from '../../../../components/navigation/NextPageTouchArea';
import PageSection from '../../../../components/PageSection';
import { isMobileDevice, loadImage } from '../../../../constants/global';
import { Project } from '../../../../constants/projects';
import "./ProjectPage.scss"
import * as routes from '../../../../constants/routes';
import TopLeftAction from 'components/layout/top-left-action/TopLeftAction';
import { Col, Row, Tag } from 'antd';
import ReactPlayer from 'react-player';
import ImageGallery from 'react-image-gallery'
import { AnyPtrRecord } from 'dns';


export default function ProjectPage(){

    const params: any = useParams();
    const [showVideo, setShowVideo]: any = useState({})
    const [showGalleryPlayButton, setShowGalleryPlayButton] = useState(true)
    const [showFullscreenButton, setShowFullscreenButton] = useState(false)
    const [showGalleryFullscreenButton, setShowGalleryFullscreenButton] = useState(false)
    const [showPlayButton, setShowPlayButton] = useState(false)
    const projectsReducer = useSelector((state: any) => {
        return state.projects
    });

    const project = projectsReducer.projects.filter((project: any) => {
        return project.id == params.id
    })[0]
    
    const renderImages = (images: any, videoLink?: string) => {
        const galleryImagesArr: any = []
        let galleryImages: any = {}
        if(videoLink){
            const videoItem = {
                original: require(`assets/images/projects/golunch/golunch-youtube-ss.png`),
                thumbnail: require(`assets/images/projects/golunch/golunch-youtube-ss.png`),
                embedUrl: videoLink,
                renderItem: () => _renderVideo(videoItem)
            }
            galleryImagesArr.push(videoItem)
        }
        images.map((image: any, index: number) => {
            galleryImagesArr.push(
                {
                    original: require(`assets/images/${image}`),
                    thumbnail: require(`assets/images/${image}`),
                }
            )
        })
        galleryImages = {...[galleryImagesArr]}[0]
        console.log(galleryImages)
        return galleryImages
    }
    const _toggleShowVideo = (url:string) => {
        showVideo[url] = !(showVideo[url]);
        setShowVideo(showVideo)
    
        if (showVideo[url]) {
          if (showPlayButton) {
            setShowGalleryPlayButton(false)
          }
    
          if (showFullscreenButton) {
            setShowGalleryFullscreenButton(false)
          }
        }
      }

    const _renderVideo = (item: any) => {
        return (
          <div>
            {
              videoLink ?
                <div className='video-wrapper'>
                    <a
                      className='close-video'
                      onClick={() => _toggleShowVideo(item.embedUrl)}
                    >
                    </a>
                    <iframe width="560" height="315" 
                    src={item.embedUrl} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen></iframe>
                    {/* <iframe
                      width='560'
                      height='315'
                      src={"https://www.youtube.com/watch?v=q1AopaQmv00"}
                      frameBorder='0'
                      allowFullScreen
                    >
                    </iframe> */}
                </div>
              :
                <a onClick={() => _toggleShowVideo(item.embedUrl)}>
                  <div className='play-button'></div>
                  <img className='image-gallery-image' src={item.original} />
                  {
                    item.description &&
                      <span
                        className='image-gallery-description'
                        style={{right: '0', left: 'initial'}}
                      >
                        {item.description}
                      </span>
                  }
                </a>
            }
          </div>
        );
      }
    
    const {title, tagline, description, images, stack, challenges, videoLink}: Project = project
    const sectionStyle = isMobileDevice() ? styles.mobileProjectPageSection : styles.desktopProjectPageSection
    return (
        <PageRoot>
            <TopLeftAction
                to={routes.WORK_PATH}/>
            {!isMobileDevice() && <NextPageTouchArea/>}
            <PageSection customStyles={sectionStyle}>
                <div className="project-page-title-container">
                    <h1 className="page-title project-page-title">{title}</h1>
                    <h6 className="subtitle">{tagline}</h6>
                </div>
            </PageSection>
            <PageSection customStyles={sectionStyle} >
                <ImageGallery
                    showFullscreenButton={showFullscreenButton && showGalleryFullscreenButton}
                    showPlayButton={showPlayButton && showGalleryPlayButton}
                    renderLeftNav={(onClick, disabled) => {
                        return <CarouselNav className="left-nav" onClick={onClick} disabled={disabled}>&#8592;</CarouselNav>
                    }}
                    renderRightNav={(onClick, disabled) => {
                        return <CarouselNav className="right-nav" onClick={onClick} disabled={disabled}>	&#8594;</CarouselNav>
                    }}
                    items={renderImages(images, videoLink)}
                    />
                {/* <Carousel 
                    renderItem={customRenderItem}
                    renderThumbs={customRenderThumb}>
                        {videoLink &&
                            <YoutubeSlide 
                            key={"video"}
                            url={videoLink}/>
                        }
                        {images && images.map((image: any, index: number) => {
                            return (
                                <div key={index} 
                                    className="slide-image">
                                    <img src={require(`assets/images/${image}`).default} 
                                    className={`project-page-image ${isMobile ? 'mobile-slide-image' : ''}`} alt="page image"/>
                                </div>
                            )
                        })}
                </Carousel> */}
            </PageSection>
            <PageSection customStyles={sectionStyle} >
                <h2 >Description</h2>
                <div dangerouslySetInnerHTML={description}/>
            </PageSection>
            <PageSection customStyles={sectionStyle} >
                <h2>Technology Stack</h2>
                {/* <p>Technologies involved during this project</p> */}
                {stack && stack.map((item: any, index: number) => {
                    
                    return (
                        <Tag color={""} key={index}>{item}</Tag>
                    )
                })}
            </PageSection>
        </PageRoot>
    )
}

export function CarouselNav({onClick, disabled, className, children}: any){
    return (
        <button className={`carousel-nav ${className}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

const styles = StyleSheet.create({
    imageSection: {
        padding: "0 0 40px 0"
    },
    mobileProjectPageSection: {
        padding: "0px 30px 40px 30px"
    },
    desktopProjectPageSection: {
        padding: "0 100px 40px 100px"
    }
})