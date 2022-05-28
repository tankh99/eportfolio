import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import { slideInAnimation } from '../../../../constants/animations';
import useIsInViewport from 'use-is-in-viewport';

export default function SkillsSection(){

    const [animated, setAnimated] = useState(false);
    const [isInViewport, targetRef] = useIsInViewport();

    useEffect(() => {
        if(isInViewport){
            setAnimated(true);
        }
    },[isInViewport])

    return(
        <div>
            <motion.div 
                initial="hidden"
                animate={animated ? "visible" : "hidden"}
                variants={slideInAnimation.container}>
                    <div>
                        <p>I specialise in developing</p>
                        <div className="hero bold">web &amp; mobile apps</div>
                        <div>in</div>
                    </div>
                    <motion.div className="hero translucent" variants={slideInAnimation.item}>React.js</motion.div>
                    <motion.div className="hero translucent" variants={slideInAnimation.item}>React Native</motion.div>
                    <motion.div className="hero translucent" variants={slideInAnimation.item}>ASP.NET</motion.div>
                    <motion.div className="hero translucent" variants={slideInAnimation.item}>Spring</motion.div>
            </motion.div>
        </div>
    )
}