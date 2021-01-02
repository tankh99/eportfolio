import { Col } from 'antd';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { hoverScaleAnimation, slideUpAnimation } from '../../constants/animations';
import {StyleSheet, css} from 'aphrodite-jss';
import './ProjectDisplay.scss'
import { loadImage } from '../../constants/global';

interface P {
    project: any
}

export const ProjectDisplay = (props: P) => {

    const {project} = props;
    const {title, source} = project

    const [image, setImage] = useState(undefined);
    const [animated, setAnimated] = useState(true);

        
    useEffect(() => {
        loadImage(source)
        .then((image: any) => {

            setImage(image);
        })
    },[])


    const styles = StyleSheet.create({
        
        projectImage: {
            // backgroundImage: `url(${image})`,
            "&::after": {
                content: `'${title}'`,
                display: "none",
                color: "white",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }
        }
    })
    
    return (
        <motion.div
            className={"project"}
            initial="hidden"
            animate={image ? "visible" : "hidden"}
            variants={slideUpAnimation.item}>
            <div
                className={`project-image ${css(styles.projectImage)}`}
                style={{backgroundImage: `url(${image})`}}></div>
        </motion.div>
    )
}