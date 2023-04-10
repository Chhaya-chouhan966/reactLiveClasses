import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CustomProvider from './Components/ContextAPI-Login/contex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CustomProvider>
        <App />
    </CustomProvider>
);


