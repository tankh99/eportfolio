import React from 'react';
import { Link } from 'react-router-dom';
import NextPageTouchArea from '../../../components/navigation/NextPageTouchArea';
import * as paths from '../../../constants/routes'

export default function AboutPage(){
    return (
        <div className={`page`}>
            About
            <Link to={paths.WORK_PATH}>Work</Link>
        </div>
    )
}