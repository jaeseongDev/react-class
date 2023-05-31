import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyThemeProvider from './components/Theme/MyThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyThemeProvider>
    <App />
  </MyThemeProvider>
);
