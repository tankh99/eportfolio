import PageRoot from 'components/layout/PageRoot';
import PageSection from 'components/PageSection';
import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes'

export default function NotFoundPage(){
    return (
        <PageSection padded fitScreen centered>
            <h1>Oops, that page you were looking cannot be found</h1>
            <h3>Click <Link to={routes.HOME_PATH}>here</Link> to go back home</h3>
            
        </PageSection>
    )
}