import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, useLocation, Routes, Navigate, useNavigate} from 'react-router-dom'
import NotFoundPage from './NotFoundPage';
import Navbar from '../../components/layout/navbar/Navbar';
import * as paths from '../../constants/routes'
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import ContactPage from './contact/ContactPage';
import WorkPage from './work/WorkPage';
import ProjectPage from './work/projects/ProjectPage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './PageTransition.scss';
import Footer from 'components/layout/footer/Footer';
import smallSquares from '../../assets/images/Small-Squares.png'
import mediumSquares from '../../assets/images/Medium-Squares.png'
import largeSquares from '../../assets/images/Large-Squares.png'
import ParallaxBackground from 'components/layout/background/ParallaxBackground';
import { useSelector } from 'react-redux';
import { ParallaxBanner } from 'react-scroll-parallax';

// const routes = [
//     {path: paths.HOME_PATH, name: "Home", Component: HomePage},
//     {path: paths.ABOUT_PATH, name: "About", Component: AboutPage},
//     {path: `${paths.WORK_PATH}/:id`, name: "Project", Component: ProjectPage},
//     {path: paths.WORK_PATH, name: "Work", Component: WorkPage},
// ]

export default function PublicLayout(){
    const location = useLocation();
    const navigate = useNavigate();

    const [displayLocation, setDisplayLocation] = useState(location)
    const [transitionStage, setTransitionStage] = useState("fadeIn")

    useEffect(() => {
        if(location !== displayLocation) setTransitionStage("fadeOut")
    }, [location, displayLocation])
    
    useEffect(() => {
      if (location.pathname == "/") {
        navigate(paths.HOME_PATH)
      }
    }, [location.pathname])
    
    return(
        <>
            {/* <ParallaxBackground image={smallSquares} intensity={0.3}/>
            <ParallaxBackground image={mediumSquares} intensity={0.2}/>
            <ParallaxBackground image={largeSquares} intensity={0.1}/> */}
            <Navbar/>
                <div className={`main ${transitionStage}`} onAnimationEnd={() => {
                    if(transitionStage == "fadeOut") {
                        setTransitionStage("fadeIn")
                        setDisplayLocation(location)
                    }
                }}>
                    <>
                        <Routes location={displayLocation}>
                            <Route path={paths.HOME_PATH} element={<HomePage/>}/>
                            <Route path={paths.ABOUT_PATH} element={<AboutPage/>}/>
                            <Route path={`${paths.WORK_PATH}/:id`} element={<ProjectPage/>}/>
                            <Route path={paths.WORK_PATH} element={<WorkPage/>}/>
                            <Route path={paths.CONTACT_PATH} element={<ContactPage/>}/>
                            {/* <Route path="*" element={<Navigate to="/" replace/>}/> */}
                        </Routes>
                    </>
                </div>
        </>
    )
}