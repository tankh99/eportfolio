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
import ProjectSlide from '../../../../components/projects/ProjectSlide';
import {ProjectDisplay} from '../../../../components/projects/ProjectDisplay';
import { Col, Row } from 'antd';
import { Delay } from '../../../../components/Delay';
import { Link } from 'react-router-dom';

export default function ProjectsSection(){
    const [isInViewport, targetRef] = useIsInViewport();
    // loads the animation once and only once
    const [loaded, setLoaded] = useState(isInViewport);

    useEffect(() => {
        if(isInViewport){
            setLoaded(true);
        }
    }, [isInViewport])

    const settings = {
        dots: true,
        speed: 500,
        className: "custom-slick-slide",
        
    }
    
    return(
        <PageSection padded>
            <div ref={targetRef} className="section-header">projects</div>
                {/* Project Links */}
                <Row gutter={[24, 24]}>
                    <Col sm={24} md={12} lg={8}>
                        <Project index={0} 
                            project={projects.golunch}/>
                    </Col>
                    <Col sm={24} md={12} lg={8}>
                        <Project index={1} 
                            project={projects.eformbuilder}/>
                    </Col>
                </Row>
        </PageSection>
    )
}

const Project = ({index, project}: any) => {

    return (

        <Link to={project.slug}>
            <Delay delay={(index + 1) * 300}>
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