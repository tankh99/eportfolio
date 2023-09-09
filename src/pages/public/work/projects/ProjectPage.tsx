/* eslint-disable @typescript-eslint/no-var-requires */
import { StyleSheet } from 'aphrodite-jss';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageRoot from '../../../../components/layout/PageRoot';
import NextPageTouchArea from '../../../../components/navigation/NextPageTouchArea';
import PageSection from '../../../../components/PageSection';
import { isMobileDevice } from '../../../../constants/global';
import { Project } from '../../../../constants/projects';
import "./ProjectPage.scss"
import * as routes from '../../../../constants/routes';
import TopLeftAction from 'components/layout/top-left-action/TopLeftAction';
import ImageGallery from 'react-image-gallery'

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

    const project = projectsReducer.projects.filter((project: Project) => {
        return project.id == params.id
    })[0]
    
    const renderImages = (images: string[], videoThumbnail: string, videoLink?: string) => {
        const galleryImagesArr: any = []
        let galleryImages: any = {}
        if(videoLink){
            const videoItem = {
                original: require(`assets/images/${videoThumbnail}`),
                thumbnail: require(`assets/images/${videoThumbnail}`),
                embedUrl: videoLink,
                renderItem: () => _renderVideo(videoItem)
            }
            galleryImagesArr.push(videoItem)
        }
        images.map((image: string, index: number) => {
            galleryImagesArr.push(
                {
                    original: require(`assets/images/${image}`),
                    thumbnail: require(`assets/images/${image}`),
                }
            )
        })
        galleryImages = {...[galleryImagesArr]}[0]
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
                <div className='video-wrapper flex justify-center'>
                    <a
                      className='close-video'
                      onClick={() => _toggleShowVideo(item.embedUrl)}
                    >
                    </a>
                    <iframe width="640" height="480" 
                    src={item.embedUrl} 
                    title="YouTube video player" 
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
    
    const {title, tagline, description, images, stack, videoLink}: Project = project
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
                    items={renderImages(images, project.videoThumbnail, videoLink)}
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
                <h2 className='mb-2'>Technology Stack</h2>
                {/* <p>Technologies involved during this project</p> */}
                <div className='flex flex-wrap gap-4'>
                {stack && stack.map((item: string, index: number) => {
                    return (
                        <span className='bg-slate-700 text-white rounded-full py-2 px-4' key={index}>{item}</span>
                    )
                })}
                </div>
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