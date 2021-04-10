import React from 'react';
import NextPageTouchArea, { Direction } from '../../../components/navigation/NextPageTouchArea';
import ProjectsSection from './projects/ProjectsSection';
import {StyleSheet, css} from 'aphrodite-jss';
import PageRoot from '../../../components/layout/PageRoot';
import { Link } from 'react-router-dom';
import * as paths from '../../../constants/routes'

export default function WorkPage(){
    return (
        <PageRoot className={`${css(styles.page)}`}>
            <ProjectsSection/>
            {/* <NextPageTouchArea from="/home" to="/about" direction={Direction.Horizontal}/> */}
        </PageRoot>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: "40px 0"
    }
})