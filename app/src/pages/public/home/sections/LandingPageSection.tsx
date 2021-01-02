import { motion } from 'framer-motion';
import {StyleSheet, css} from 'aphrodite-jss'
import React, { useState } from 'react';
import PageSection from '../../../../components/PageSection';
import Typist from 'react-typist'
import { slideInAnimation } from '../../../../constants/animations';
import useIsInViewport from 'use-is-in-viewport';

export default function LandingPageSection(){

    const [skillsShown, setSkillsShown] = useState(false)

    const [isInViewport, targetRef] = useIsInViewport();
    return (
        <PageSection padded customStyles={styles.landingPage}>
            <div>
                <div className={`section-header`}>intro</div>
                <Typist 
                    className="h2" avgTypingDelay={25} stdTypingDelay={5} 
                    onTypingDone={() => setSkillsShown(true)}>
                    <span >Hi there! I&apos;m Khang Hou and I specialise in developing</span>
                </Typist>
                <motion.div 
                    initial="hidden"
                    animate={skillsShown ? "visible" : "hidden"}
                    variants={slideInAnimation.container}>
                        <div >
                            <div className="hero bold">web &amp; mobile apps</div>
                            <div>in</div>
                        </div>
                        <motion.div className="hero translucent" variants={slideInAnimation.item}>React.js</motion.div>
                        <motion.div className="hero translucent" variants={slideInAnimation.item}>React Native</motion.div>
                        <motion.div className="hero translucent" variants={slideInAnimation.item}>ASP.NET</motion.div>
                        <motion.div className="hero translucent" variants={slideInAnimation.item}>Spring</motion.div>
                </motion.div>
                
            </div>
        </PageSection>
    )
}

const animations = {
    
}

const styles = StyleSheet.create({
    landingPage:{
        display: "flex",
        justifyContent: "space-between"
    }
})