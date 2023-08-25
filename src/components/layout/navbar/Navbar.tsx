import React, { useEffect, useState } from 'react';
import { isMobileDevice } from '../../../constants/global';
import {StyleSheet, css} from 'aphrodite-jss'
import { Link, NavLink } from 'react-router-dom';
import { ABOUT_PATH, HOME_PATH, WORK_PATH } from '../../../constants/routes';

import './Navbar.scss';

export default function Navbar(){

    const [collapsed, setCollapsed] = useState(true)
    const [open, setOpen] = useState(false);
    
    return(
        <div>
            <div className={`${isMobileDevice() && "mobile-menu-toggle"} menu-toggle ${open ? 'open' : ""}`}
                onClick={() => setOpen(!open)}>
                <div className={`hamburger `}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="cross">
                    <span></span>
                    <span></span>
                </div>
            </div>
                <NavbarMenu 
                    open={open}
                    setOpen={setOpen}/>
            {/* <div className={`navbar`}>
                <div className={'logo link-button'}>
                    <Link to={HOME_PATH} className={`link`}>khang hou</Link>
                </div>
                
                <div className={`desktop-navbar-links`}>
                    <NavbarLinks/>
                </div>
                <div className={`desktop-navbar-links ${collapsed ? "hide" : "show"}`}>
                    <NavbarLinks/>
                </div>
            </div> */}
        </div>
    )
}

function NavbarMenu({open, setOpen}: any) {

    const [linkButtonClass, setLinkButtonClass] = useState(`navbar-menu-link link-button`)
    useEffect(() => {
        if(isMobileDevice()){
            setLinkButtonClass(`${linkButtonClass}`);
        }
    }, [])
    return (
        <div className={`navbar-menu ${open ? "slide-from-right" : ""}`}>
            
            <div className="">
            
                <NavLink 
                    to={HOME_PATH} 
                    style={({isActive}) => isActive ? styles.active : undefined}
                    className={`link`} 
                    onClick={() => setOpen(!open)}>
                    <div className={linkButtonClass}>home</div>
                </NavLink>
                <NavLink to={WORK_PATH} 
                    style={({isActive}) => isActive ? styles.active : undefined}
                    className={`link`}
                    onClick={() => setOpen(!open)}>
                    <div className={linkButtonClass}>projects</div>
                </NavLink>
                <NavLink to={ABOUT_PATH} 
                    style={({isActive}) => isActive ? styles.active : undefined}
                    className={`link`}
                    onClick={() => setOpen(!open)}>
                    <div className={linkButtonClass}>about</div>
                </NavLink>
            </div>
        </div>
    )
}

function NavbarLinks(){
    return (
        <>
            <Link to={WORK_PATH} className={`link`}>
                <div className={'link-button'}>
                        work
                </div>
            </Link>
            <Link to={ABOUT_PATH} className={`link`}>
                <div className={'link-button'}>
                    about
                </div>
            </Link>
        </>
    )
}

const styles = StyleSheet.create({
    activeLink: {
        color: "#fff",

    }
})