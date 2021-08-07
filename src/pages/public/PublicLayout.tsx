import { Layout, Menu, Slider } from 'antd';
import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, useLocation} from 'react-router-dom'
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
    const location: any = useLocation();
    const backgroundHeight = useSelector((state: any) => state.ui.backgroundHeight)

    return(
        <>
            {/* <ParallaxBanner
                layers={[
                    {
                        image: smallSquares,
                        amount: 0.3
                    },
                    {
                        image: mediumSquares,
                        amount: 0.2
                    },
                    {
                        image: largeSquares,
                        amount: 0.1
                    }
                ]}/> */}
            <ParallaxBackground image={smallSquares} intensity={0.3}/>
            <ParallaxBackground image={mediumSquares} intensity={0.2}/>
            <ParallaxBackground image={largeSquares} intensity={0.1}/>
            <Navbar/>
            
            <TransitionGroup>
                <CSSTransition 
                    key={location.key}
                    classNames="fade"
                    timeout={300}>
                    <div className="main">
                        <Switch location={location}>
                            <Redirect exact path="/" to={paths.HOME_PATH}/>
                            <Route path={paths.HOME_PATH} component={HomePage}/>
                            <Route path={paths.ABOUT_PATH} component={AboutPage}/>
                            <Route path={`${paths.WORK_PATH}/:id`} component={ProjectPage}/>
                            <Route path={paths.WORK_PATH} component={WorkPage}/>
                            <Route path={paths.CONTACT_PATH} component={ContactPage}/>
                            <Route path="/">
                                <NotFoundPage/>
                            </Route>
                        </Switch>
                        {/* <Footer/> */}
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </>
    )
}