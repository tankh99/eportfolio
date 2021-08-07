import React from 'react'
import { Parallax, useController } from 'react-scroll-parallax'

function ParallaxComponent() {
    
    const {parallaxController} = useController();

    return (
        <div>
            <Parallax>
                <div></div>
            </Parallax>
        </div>
    )
}
