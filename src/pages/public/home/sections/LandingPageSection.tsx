import { motion } from 'framer-motion';
import {StyleSheet, css} from 'aphrodite-jss'
import React, { useState } from 'react';
import PageSection from '../../../../components/PageSection';
import Typist from 'react-typist'
import { fadeInAnimation, slideInAnimation, slideUpAnimation } from '../../../../constants/animations';
// import useIsInViewport from 'use-is-in-viewport';
import { Link } from 'react-router-dom';
import { ABOUT_PATH, WORK_PATH } from '../../../../constants/routes';
import "./LandingPageSection.scss";
import LandingPageAnimation from '../components/LandingPageAnimation';
import { sessionGet, sessionSet } from '../../../../utils/storage';
import {TypeAnimation} from 'react-type-animation'

export default function LandingPageSection(){

    const introKey = "intro-done"
    
    const [finishTyping, setFinishTyping] = useState(sessionGet(introKey))
    const [startAnimation, setStartAnimation] = useState(false);
    const [startTypingLine2, setStartTypingLine2] = useState(false)

    const onFinishTyping = () => {
        setFinishTyping(true)
        sessionSet(introKey, true)
    }

    const intro = [
        "Hi there, I'm Khang Hou.",
        "I'm a full stack web & mobile developer based in Singapore."
    ]
    // I&apos;m Khang Hou. I&apos;m a full stack web &amp; mobile developer based in Singapore.
    const typistContent = [
        `<span>${intro[0]}</span><br/>`,
        `<span>${intro[1]}</span>`
]
    const typistHtml = {
        __html: typistContent.reduce((acc, s) => acc + s)
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
                <div className='justify-between grid grid-cols-12 gap-4'>
                    <div className="col-span-12 md:col-span-8">
                        <div className=''>
                            {finishTyping ? 
                                <p style={{fontSize: '36px', lineHeight: '1.5em'}} dangerouslySetInnerHTML={typistHtml}></p>
                                :
                                <>
                                    <TypeAnimation
                                        wrapper="div"
                                        cursor={false}
                                        style={{fontSize: '36px', lineHeight: '1.5em'}}
                                        sequence={[
                                            intro[0],
                                            500,
                                            () => {
                                                setStartTypingLine2(true)
                                            }
                                        ]}/>
                                    {startTypingLine2 &&
                                        <TypeAnimation
                                            wrapper="div"
                                            cursor={true}
                                            style={{fontSize: '36px', margin: "0 0"}}
                                            sequence={[
                                                intro[1],
                                                1000,
                                                () => {
                                                    onFinishTyping()
                                                }
                                            ]}/>
                                    }

                                </>
                            }

                        </div>
                    </div>
                    <div className="col-span-24 md:col-span-4">
                        <LandingPageAnimation animate={startAnimation} />
                    </div>
                </div>
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