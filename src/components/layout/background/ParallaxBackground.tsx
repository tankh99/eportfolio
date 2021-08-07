import React, { useEffect, useState } from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import background from '../../../assets/images/background.png'
import "./ParallaxBackground.scss";



export default function ParallaxBackground(props: any){
    const {image, intensity, style, children} = props;
    const [offsetY, setOffsetY] = useState(0)

    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return (
        <img src={image} className="parallax-background" style={{
            transform: `translateY(${offsetY * intensity}px)`
        }}/>
        // <ParallaxBanner className="background" style={style}
        //     layers={layers}>
        // </ParallaxBanner>
    )
}