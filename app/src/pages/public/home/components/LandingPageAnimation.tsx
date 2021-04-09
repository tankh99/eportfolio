import { css, StyleSheet } from 'aphrodite';
import { motion } from 'framer-motion';
import React from 'react';

interface P {
    animate: boolean
}

export default function LandingPageAnimation(props: P){
    return (
        <motion.div 
            className={css(styles.container)}
            initial="hidden"
            animate={props.animate ? "visible": "hidden"}
            variants={animations.container}>
            <motion.div variants={animations.rotate1} className={css(styles.shape, styles.cyan)}></motion.div>
            <motion.div variants={animations.rotate2} className={css(styles.shape, styles.magenta)}></motion.div>
            <motion.div variants={animations.rotate3} className={css(styles.shape, styles.yellow)}></motion.div>
        </motion.div>
    )
}

const animations = {
    container: {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
        }
    },
    rotate1: {
        hidden: {
            rotate: 0
        },
        visible: {
            rotate: 180,
            transition: {   
                duration: 0.2
            }
        }
    },
    rotate2: {
        hidden: {
            rotate: 0
        },
        visible: {
            rotate: 120,
            transition: {   
                duration: 0.3
            }
        }
    },
    rotate3: {
        hidden: {
            rotate: 0
        },
        visible: {
            rotate: 30,
            transition: {   
                duration: 0.4
            }
        }
    }
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        height: "100%",
        // "@media(min-width:1068px)"
    },
    shape: {
        borderRadius: "100px",
        opacity: 0.7,
        position: "absolute",
        width: "85px",
        height: "170px",
        transformOrigin: "top",
        transition: "0.4s",
        right: "0%",
        top: "50%",

        // transform: "translate(-50%, -50%)"
    },
    cyan: {
        background: "#00FFFF",

    },
    magenta: {
        background: "#FF00FF",
    },
    yellow: {
        background: "#FFFF00"
    }
})
