import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import PageSection from '../../../../components/PageSection';
import ProjectModal from '../../../../components/projects/ProjectModal';
import {StyleSheet, css} from 'aphrodite-jss';
import { slideInAnimation, slideUpAnimation } from '../../../../constants/animations';
import * as projects from '../../../../constants/projects';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveIndexAction } from '../../../../store/actions/projectActions';
import Slider from 'react-slick';
import "./ProjectsSection.scss";
import {ProjectDisplay} from '../../../../components/projects/ProjectDisplay';
import { Delay } from '../../../../components/Delay';
import { Link } from 'react-router-dom';
import { getNameFromPath } from 'utils/utils';
import useIsInViewport from 'hooks/useIsInViewport';

export default function ProjectsSection(){
    const targetRef = useRef(null)
    const [isInViewport] = useIsInViewport(targetRef);
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
            <div className='grid grid-cols-12 gap-4'>
                {projects && projects.map((project: any, index: number) => {
                    return (
                        <div className="col-span-12 md:col-span-6 lg:col-span-4 "key={index}>
                            <Project index={index} 
                                project={project}/>
                        </div>
                    )
                })}
            </div>
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
            <Delay delay={(index + 1) * 150}>
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