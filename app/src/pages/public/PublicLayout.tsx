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

// const routes = [
//     {path: paths.HOME_PATH, name: "Home", Component: HomePage},
//     {path: paths.ABOUT_PATH, name: "About", Component: AboutPage},
//     {path: `${paths.WORK_PATH}/:id`, name: "Project", Component: ProjectPage},
//     {path: paths.WORK_PATH, name: "Work", Component: WorkPage},
// ]

export default function PublicLayout(){
    const location: any = useLocation();
    return(
        <>
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
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </>
    )
}