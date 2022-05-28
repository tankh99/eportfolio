import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import PageSection from '../../../../components/PageSection';
import ProjectModal from '../../../../components/projects/ProjectModal';
import {StyleSheet, css} from 'aphrodite-jss';
import { slideInAnimation, slideUpAnimation } from '../../../../constants/animations';
import useIsInViewport from 'use-is-in-viewport';
import * as projects from '../../../../constants/projects';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveIndexAction } from '../../../../store/actions/projectActions';
import Slider from 'react-slick';
import "./ProjectsSection.scss";
import {ProjectDisplay} from '../../../../components/projects/ProjectDisplay';
import { Col, Row } from 'antd';
import { Delay } from '../../../../components/Delay';
import { Link } from 'react-router-dom';
import { getNameFromPath } from 'utils/utils';

export default function ProjectsSection(){
    const [isInViewport, targetRef] = useIsInViewport();
    // loads the animation once and only once
    const [loaded, setLoaded] = useState(isInViewport);
    const projects = useSelector((state: any) => state.projects).projects;
    
    useEffect(() => {
        if(isInViewport){
            setLoaded(true);
        }
    }, [isInViewport])
    
    return(
        <PageSection padded>
            <div ref={targetRef} className="section-header">projects</div>
            {/* Project Links */}
            <Row gutter={[24, 24]}>
                {projects && projects.map((project: any, index: number) => {
                    return (
                        <Col sm={24} md={12} lg={8} key={index} className="col">
                            <Project index={index} 
                                project={project}/>
                        </Col>
                    )
                })}
            </Row>
        </PageSection>
    )
}

const Project = ({index, project}: any) => {
    // console.log((index + 1) * 300)
    // console.log(project)
    return (

        <Link 

        state={{prevPath: getNameFromPath(window.location.pathname)}}
        to={{
            pathname: project.slug,
        }}>
            <Delay delay={(index + 1) * 250}>
                <ProjectDisplay project={project}/>
            </Delay>
        </Link>
    )
}

const styles = StyleSheet.create({
    projectContainerRow: {
        display: "flex",
    }
})