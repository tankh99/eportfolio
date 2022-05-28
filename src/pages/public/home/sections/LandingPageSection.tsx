import { motion } from 'framer-motion';
import {StyleSheet, css} from 'aphrodite-jss'
import React, { useState } from 'react';
import PageSection from '../../../../components/PageSection';
import Typist from 'react-typist'
import { fadeInAnimation, slideInAnimation, slideUpAnimation } from '../../../../constants/animations';
import useIsInViewport from 'use-is-in-viewport';
import { Link } from 'react-router-dom';
import { ABOUT_PATH, WORK_PATH } from '../../../../constants/routes';
import "./LandingPageSection.scss";
import LandingPageAnimation from '../components/LandingPageAnimation';
import { Col, Row } from 'antd';
import { sessionGet, sessionSet } from '../../../../utils/storage';

export default function LandingPageSection(){

    const introKey = "intro-done"
    
    const [finishTyping, setFinishTyping] = useState(sessionGet(introKey))
    const [startAnimation, setStartAnimation] = useState(false);

    const onFinishTyping = () => {
        setFinishTyping(true)
        sessionSet(introKey, true)
    }

    const typistSettings = {
        className: "hero typist",
        avgTypingDelay: 25,
        stdTypingDelay: 5
    }

    const typistContent = {
        __html: `<span>Hi there!</span>
        <br/>
        <span>I&apos;m Khang Hou. I&apos;m a full stack web &amp; mobile developer.</span>`
    }

    return (
        <PageSection padded fitScreen centered
            customStyles={styles.landingPage}>

            <div style={{width: "100%"}}>
            {/* <button onClick={() => {
                setStartTyping(false)
                setTimeout(() => {
                    setStartTyping(true)
                    console.log(startTyping)
                }, 1000)
            }}>Restart</button> */}
                <Row justify="space-between" gutter={[0, 24]}>
                    <Col flex={16} className={css(styles.col)} sm={24} md={16}>
                        <div>
                            {finishTyping ? 
                                <div className="hero" dangerouslySetInnerHTML={typistContent}></div>
                                :
                                <Typist {...typistSettings}
                                    onTypingDone={() => onFinishTyping()}>
                                    {/* <div dangerouslySetInnerHTML={typistContent}></div> */}
                                    <span>Hi there!</span>
                                    <br/>
                                    <span>I&apos;m Khang Hou. I&apos;m a full stack web &amp; mobile developer.</span>
                                </Typist>
                                
                            }

                        </div>
                    </Col>
                    <Col flex={8} className={css(styles.col)} sm={24} md={8}>
                        <LandingPageAnimation animate={startAnimation} />
                    </Col>
                </Row>
                <motion.div
                    className="main-button-container"
                    initial={"hidden"}
                    animate={finishTyping ? "visible" : "hidden"}
                    variants={fadeInAnimation.item}
                    onAnimationComplete={() => setTimeout(() => {setStartAnimation(true), 500})}>
                    <Link to="/work" className="button">
                        View my work
                    </Link>
                </motion.div>
            </div>
        </PageSection>
    )
}

const animations = {
    
}

const styles = StyleSheet.create({
    landingPage:{
        // display: "flex",
        // justifyContent:"space-between"
    },
    container: {
        // display: "flex",
        // justifyContent:"space-between"
    },
    col: {
        width: "100%"
    }
    
})