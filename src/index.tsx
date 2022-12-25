import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-image-gallery/styles/scss/image-gallery.scss"
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider as StoreProvider} from 'react-redux'
import { createRoot} from "react-dom/client"
import {store} from './store/store';
import {ParallaxProvider } from 'react-scroll-parallax';
import { ChakraProvider } from '@chakra-ui/react'

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ChakraProvider>
        <ParallaxProvider>
          <App />
        </ParallaxProvider>
      </ChakraProvider>
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
