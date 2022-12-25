import { StyleSheet, css } from 'aphrodite-jss';
import React from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import './LandingPage.scss';

interface P {
    title: string, 
    description?: string,
    children: any,
    source: any,
}

export default function LandingPage(props :P){
    const {title, description, source, children} = props;
    return (
        // <Parallax className={`container`} y={[-20, 20]} tagOuter="figure">
        //     <img className={`landing-page-image`} src={source}/>
        // </Parallax>
        <ParallaxBanner
            layers={[
                {
                    image: source, 
                    speed: 10
                }]}
            style={{height: "500px"}}
            >
            <h1>Banner Child</h1>
        </ParallaxBanner>
        // <Parallax className={css(styles.container)} y={[-20, 20]} tagOuter="figure">
        //     <img src={source} className={css(styles.landingPageImage)}/>
        //     <div className={css(styles.landingPageText)}>
        //         <div className={`page-title ${css(styles.title)}`}>
        //             {title}
        //         </div>
        //         <div className={css(styles.description)}>
        //             {description}
        //         </div>
        //     </div>
        // </Parallax>
    )
}

const styles = StyleSheet.create({
    container: {
        // height: "calc(100vh)",
        // paddingTop: "var(--navbar-height)",
        // width:"100vw"
    },
    landingPageImage: {
        display: "block",
        width: "100%",
        height: "auto"
        // old
        // display: "flex",
        // width: "100%",
        // height: "100%",
        // position:"absolute",
        // top: 0,
        // objectFit:"cover",
        // zIndex: -1
    },
    landingPageText: {
        position:"absolute",
        display: "flex",
        justifyContent: "center",
        alignitems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        textAlign: 'center',
        top: 0
    },
    title: {
        color: "white",
    },
    description: {
        color: "white",
        fontSize: "18px"
    }
})