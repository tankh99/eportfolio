import { Layout, Menu, Slider } from 'antd';
import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import NotFoundPage from './NotFoundPage';
import Navbar from '../../components/layout/navbar/Navbar';
import * as routes from '../../constants/routes'
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import ContactPage from './contact/ContactPage';
import WorkPage from './work/WorkPage';
import ProjectPage from './work/projects/ProjectContainer';
import GolunchProjectPage from './work/projects/golunch/GolunchPage';

export default function PublicLayout(){
    
    return(
        <Router>
            <Navbar/>
            <div className="main">
                <Switch>
                    <Redirect exact path="/" to={routes.HOME_PATH}/>
                    <Route path={routes.HOME_PATH} component={HomePage}/>
                    <Route path={routes.ABOUT_PATH} component={AboutPage}/>
                    {/* <Route path={`${routes.WORK_PATH}/projects/:slug`} component={ProjectPage}/> */}
                    <Route path={`${routes.WORK_PATH}/${routes.WORK_PATHS.GOLUNCH_PATH}`} component={GolunchProjectPage}/>
                    <Route path={routes.WORK_PATH} component={WorkPage}/>
                    <Route path={routes.CONTACT_PATH} component={ContactPage}/>
                    <Route path="/">
                        <NotFoundPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}