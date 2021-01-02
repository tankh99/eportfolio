import React, { useState } from 'react';
import "./HomePage.scss"
import LandingPage from '../../../components/layout/landing-page/LandingPage';
import LandingPageImage from '../../../assets/images/laptop-code.jpg'
import HomeIntroSection from './sections/HomeIntroSection';
import LandingPageSection from './sections/LandingPageSection';
import { useViewportScroll } from 'framer-motion';
import * as projects from '../../../constants/projects'
import NextPageTouchArea from '../../../components/navigation/NextPageTouchArea';

export default function HomePage(){
    
    return (
        <div>
            <LandingPageSection/>
            <NextPageTouchArea to={"/work"}/>
        </div>
    )
}