import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './styles/typography.scss'
import './styles/layout.scss'
import './styles/typography.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider as StoreProvider} from 'react-redux'
import {store} from './store/store';
import {ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
