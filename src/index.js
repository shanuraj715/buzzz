import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './assets/css/layout.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'


// For React 18
const appElement = document.getElementById('buzzz-app')
const app = createRoot(appElement)

app.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
