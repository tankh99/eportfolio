import React from 'react';
import {StyleSheet, css} from 'aphrodite-jss'
import PageSection from '../../../../components/PageSection';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

export default function HomeIntroSection(){
    return (
        <PageSection customStyles={styles.container}>
            {/* <Parallax
                y={[-100, 100]}>
                <div className="section-title">Hi there</div>
                <div>My name is Khang Hou, I am a software developer</div>
            </Parallax> */}
            
        </PageSection>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        flexDirection: "column",
    },
    
})