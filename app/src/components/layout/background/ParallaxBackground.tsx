import React from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import background from '../../../assets/images/background.png'
import "./ParallaxBackground.scss";


export default function ParallaxBackground(){

    return (
        <ParallaxBanner className="background"
            style={{backgroundImage: "url(../../../assets/images/background.png)"}}
            layers={[{
                image: background,
                amount: 0.1
            }]}>
        </ParallaxBanner>
    )
}