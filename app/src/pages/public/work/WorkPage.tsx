import React from 'react';
import NextPageTouchArea, { Direction } from '../../../components/navigation/NextPageTouchArea';
import ProjectsSection from './projects/ProjectsSection';

export default function WorkPage(){
    return (
        <div>            
            <ProjectsSection/>
            <NextPageTouchArea from="/home" to="/about" direction={Direction.Horizontal}/>
        </div>
    )
}