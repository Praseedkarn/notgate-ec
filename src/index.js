import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

// React Snap support - check if HTML was pre-rendered
if (rootElement.hasChildNodes()) {
  // If HTML already exists (pre-rendered by react-snap), hydrate it
  ReactDOM.hydrateRoot(rootElement, <App />);
} else {
  // Otherwise, render normally (development or first load)
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();