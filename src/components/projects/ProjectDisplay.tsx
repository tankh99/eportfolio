/* eslint-disable @typescript-eslint/no-var-requires */
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { hoverScaleAnimation, slideUpAnimation } from '../../constants/animations';
import {StyleSheet, css} from 'aphrodite-jss';
import './ProjectDisplay.scss'
import { loadImage } from '../../constants/global';
import { Project } from 'constants/projects';

interface P {
    project: Project
}

export const ProjectDisplay = (props: P) => {

    const {project} = props;
    const {title, thumbnail, images, stack, expanded} = project

    const stackString = stack.join(", ")
    const [image, setImage] = useState("");
        
    useEffect(() => {
        const imageToImport = thumbnail || images[0]
        // console.log("img path", imageToImport)
        setImage(require(`../../assets/images/${imageToImport}`))
    },[])

    
    return (
        <motion.div
            className={"project relative"}
            initial="hidden"
            animate={image ? "visible" : "hidden"}
            // TODO: FIx the slideup animation not starting with opacity 0
            variants={slideUpAnimation.item}>
            <div
                className={`project-image`}
                style={{backgroundImage: `url(${image})`, backgroundSize: `${expanded ? "cover" : "contain"}`}}></div>
            <div className="project-overlay">
                <h3 className="project-overlay-title">{title}</h3>
                <p className="project-overlay-subtitle">{stackString}</p>
            </div>
        </motion.div>
    )
}