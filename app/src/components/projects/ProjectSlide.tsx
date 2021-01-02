import React, { useEffect, useState } from 'react';
import { Project } from './ProjectModal';
import "./ProjectSlide.scss"
import {Image} from 'antd';
import golunch from "../../assets/images/projects/golunch/golunch-tracking.png"

interface P {
    project: Project,
}

export default function ProjectSlide(props: P){
    const {project} = props
    const {title, description, source} = project

    const [slideImage, setSlideImage] = useState(undefined);
        
    useEffect(() => {
        console.log(source)
        import(`../../assets/images/projects/${source}`).then((image: any) => {
        console.log(image);
        setSlideImage(image.default)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <div className="project-slide">
            <Image className="project-slide-image" src={slideImage}/>
            {/* <div className="project-slide-overlay"></div> */}
            {/* <img src={golunch}/> */}
            <div className="project-slide-text">
                <div className="h2">{title}</div>
            </div>
        </div>
    )
}