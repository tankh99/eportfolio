import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom'
import { HOME_PATH } from './constants/routes';
import {Provider as StoreProvider} from 'react-redux'
import {store} from './store/store';
import PublicLayout from './pages/public/PublicLayout';
import ReactGA from 'react-ga'

ReactGA.initialize(process.env.REACT_APP_MEASUREMENT_ID ?? "")
export default function App() {
  return (
        <Router>
            <Switch>
              <Route path="/" component={PublicLayout}/>
            </Switch>
        </Router>
  );
}

