import React, { useState } from 'react';
import "./HomePage.scss"
import LandingPage from '../../../components/layout/landing-page/LandingPage';
import LandingPageImage from '../../../assets/images/laptop-code.jpg'
import HomeIntroSection from './sections/HomeIntroSection';
import LandingPageSection from './sections/LandingPageSection';
import ParallaxBackground from 'components/layout/background/ParallaxBackground';

export default function HomePage(){
    
    return (
        <div className="homepage">
            <LandingPageSection/>
        </div>
    )
}