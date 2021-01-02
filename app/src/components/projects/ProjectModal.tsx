import React, { useEffect, useState } from 'react';
import Hexagon from 'react-hexagon'
import {motion} from 'framer-motion'
import {StyleSheet, css} from 'aphrodite-jss'
import "./ProjectModal.scss";
import { ArrowLeftOutlined, CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveIndexAction } from '../../store/actions/projectActions';
import { Project } from '../../constants/projects';


interface P {
    project: Project,
    index: number,
    children: any
}

export default function ProjectModal(props: P){
    const {project, index, children} = props;
    const {title, description} = project

    const dispatch = useDispatch()
    const activeIndex = useSelector((state: any) => state.projects.activeIndex);
    
    useEffect(() => {
        // used to receive updated props
    }, [])

    return (        
        <motion.div 
            className="project-container"
            initial="hidden"
            animate={index === activeIndex ? "display" : "hidden"}
            variants={animations.slide}>
            <div className="relative">
                <CloseOutlined className="close" onClick={() => dispatch(setActiveIndexAction(-1))}/>
            </div>
            {/* <div>
                <ArrowLeftOutlined */}
            {/* </div> */}
            <div className="project-container-content">

                <div>
                    {/* <div className="title">{title}</div> */}
                    <div>{description}</div>
                </div>
                {children}
            </div>
        </motion.div>
    )
}
 const animations = {
    slide: {
        hidden: {
            left: "-100vw",
            transition: {
                duration: 0.2
            }
        },
        display: {
            left: 0,
            transition: {
                type: "spring",
                duration: 0.4
            }
        }
    }
 }

 const styles = StyleSheet.create({
     hexagon: {
         width: "100%"
     }
 })
