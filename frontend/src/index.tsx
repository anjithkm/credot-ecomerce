import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from "./routes";
import { store } from "./store/store";
import { Provider } from "react-redux";
import {BrowserRouter } from 'react-router-dom';
import ErrorBoundary from "./pages/common/ErrorBoundary";

import './index.scss';



const rootElement = document.getElementById('root') as HTMLElement

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <Provider store={store}>
          <BrowserRouter>
             <Routes />
          </BrowserRouter>
        </Provider>
      </ErrorBoundary>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals(console.log);

