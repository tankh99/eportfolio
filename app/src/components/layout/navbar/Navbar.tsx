import React, { useEffect, useState } from 'react';
import { isMobileDevice } from '../../../constants/global';
import {StyleSheet, css} from 'aphrodite-jss'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { ABOUT_PATH, HOME_PATH, WORK_PATH } from '../../../constants/routes';
import Icon from '@ant-design/icons/lib/components/AntdIcon';
import { MenuOutlined } from '@ant-design/icons';

import './Navbar.scss';

export default function Navbar(){

    const [collapsed, setCollapsed] = useState(true)
    const [open, setOpen] = useState(false);
    
    return(
        <div>
            <div className={`menu-toggle ${open ? 'open' : ""}`}
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
        console.log(isMobileDevice())
        if(isMobileDevice()){
            setLinkButtonClass(`${linkButtonClass} fukcf`);
        }
        console.log(linkButtonClass);
    }, [])
    return (
        <div className={`navbar-menu ${open ? "slide-from-right" : ""}`}>
            
            <div className="">
            
                <Link to={HOME_PATH} className={`link`} onClick={() => setOpen(!open)}>
                    <div className={linkButtonClass}>home</div>
                </Link>
                <Link to={WORK_PATH} className={`link`} onClick={() => setOpen(!open)}>
                    <div className={linkButtonClass}>work</div>
                </Link>
                <Link to={ABOUT_PATH} className={`link`} onClick={() => setOpen(!open)}>        
                    <div className={linkButtonClass}>about</div>
                </Link>
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
    
})