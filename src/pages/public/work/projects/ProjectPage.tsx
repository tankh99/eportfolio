/* eslint-disable @typescript-eslint/no-var-requires */
import { StyleSheet, css } from 'aphrodite-jss';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import PageRoot from '../../../../components/layout/PageRoot';
import NextPageTouchArea from '../../../../components/navigation/NextPageTouchArea';
import PageSection from '../../../../components/PageSection';
import { isMobileDevice, loadImage } from '../../../../constants/global';
import { Project } from '../../../../constants/projects';
import "./ProjectPage.scss"
import * as routes from '../../../../constants/routes';
import TopLeftAction from 'components/layout/top-left-action/TopLeftAction';
import { Col, Row } from 'antd';
import { Carousel } from 'react-responsive-carousel';


export default function ProjectPage(){

    const history: any = useHistory();
    const params: any = useParams();

    const projectsReducer = useSelector((state: any) => {
        return state.projects
    });

    const project = projectsReducer.projects.filter((project: any) => {
        return project.id == params.id
    })[0]

    // if (project == null){
    //     history.push(routes.WORK_PATH);
    // }

    
    const {title, tagline, description, images, stack, challenges} = project
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
                <Carousel>
                {images && images.map((image: any, index: number) => {
                    return (
                        <div key={index} 
                            className="slide-image">
                            <img src={require(`assets/images/${image}`).default} className="project-page-image" alt="page image"/>
                        </div>
                    )
                })}
                </Carousel>
            </PageSection>
            <PageSection customStyles={sectionStyle} >
                <h2 >Description</h2>
                <div dangerouslySetInnerHTML={description}/>
            </PageSection>
            <PageSection customStyles={sectionStyle} >
                <h2>Technology Stack</h2>
                <p>Technologies involved during this project</p>
                <ul>
                {stack && stack.map((item: any, index: number) => {
                    return (
                    <li key={index}>{item}</li>   
                    )
                })}
                </ul>
            </PageSection>
        </PageRoot>
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