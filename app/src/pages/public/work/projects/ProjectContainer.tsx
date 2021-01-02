import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import NextPageTouchArea from '../../../../components/navigation/NextPageTouchArea';
import PageSection from '../../../../components/PageSection';
import { loadImage } from '../../../../constants/global';
import { Project } from '../../../../constants/projects';
import "./ProjectContainer.scss"

interface P {
    project: Project
    children: any
}

export default function ProjectContainer(props: P){
    const {project, children} = props
    const [pageImage, setPageImage] = useState("")
    const {title, tagline, description, source, stack, challenges} = project

    useEffect(() => {
        loadImage(source)
        .then((image: any) => {
            setPageImage(image)
        })
    }, [])

    return (
        <div>
            {/* <NextPageTouchArea to={"/work/projects/e-formbuilder"}/> */}
            <PageSection padded>
                <div className="project-page-title-container">
                    <h1 className="page-title project-page-title">{title}</h1>
                    <h6 className="subtitle">{tagline}</h6>
                </div>

                <div>
                    <img src={pageImage} className="project-page-image" alt="page image"/>
                </div>
            </PageSection>
            <PageSection padded>
                <h2 >Overview</h2>
                <div>{description}</div>
            </PageSection>
            <PageSection padded>
                <h2>Technology Stack</h2>
                <p>Technologies I involved during this project</p>
                <ul>
                {stack && stack.map((item: any, index: number) => {
                    return (
                    <li key={index}>{item}</li>   
                    )
                })}
                </ul>
            </PageSection>
            {/* Challenges */}
            {challenges && 
            <PageSection padded>
                <h2>Challenges</h2>
                <p dangerouslySetInnerHTML={challenges}></p>
            </PageSection>
            }
        </div>
    )
}