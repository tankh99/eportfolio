import { DoubleLeftOutlined, DoubleRightOutlined, RightOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import { getNameFromPath, getSlug } from '../../utils/utils';
import "./NextPageTouchArea.scss"

export enum Direction {
    Horizontal= "horizontal",
    Vertical= "vertical",
}

interface P {
    direction?: Direction
}

export default function NextPageTouchArea(props: P){
    const {direction} = props

    const projectsReducer = useSelector((state: any) => state.projects)
    const location:any = useLocation();
    const navigate: any = useNavigate();
    
    const projects = projectsReducer.projects;
    // const toProject = projectsReducer.projects.filter((project: any) => project.slug == to)[0]
    // const fromProject = projectsReducer.projects.filter((project: any) => project.slug == from)[0]
    const currentProject = projects.filter((project: any) => project.slug == location.pathname)[0];
    const currentIndex = projects.findIndex((project: any) => project.slug == location.pathname);
    
    const toIndex = currentIndex + 1 != projects.length ? currentIndex + 1 : null;
    const toProject = projects[toIndex];
    return (
        <div className=''>
            {(navigate.length > 0) &&
                <a onClick={() => navigate(-1)} 
                    className={`touch-area left ${props.direction ? `${props.direction}` : Direction.Horizontal}`}>
                    <div className="direction-container">
                        <DoubleLeftOutlined className="direction-icon"/>
                        <div className="direction-icon-text">{location.state ? location.state.prevPath : "work"}</div>
                    </div>
                </a>
            }
            {toIndex ? 
                <Link 
                    state={{
                        prevPath: getNameFromPath(location.pathname)
                    }}
                    to={{
                        pathname: toProject.slug,
                    }} 
                    
                    className={`touch-area right ${props.direction ? `${props.direction}` : Direction.Horizontal}`}>
                    <div className="direction-container">
                        <DoubleRightOutlined className="direction-icon"/>
                        <div className="direction-icon-text">{getNameFromPath(toProject.slug)}</div>
                    </div>
                </Link>
            : <></>
            }
        </div>
    )
}
