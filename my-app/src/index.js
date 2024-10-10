import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import LanguageProvider from './context/LanguageContext/LanguageContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
    <App />
    </LanguageProvider>

  </React.StrictMode>
);


