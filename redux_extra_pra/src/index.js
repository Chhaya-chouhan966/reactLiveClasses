import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import DataProvider from './Component2/DataProvider';
import {Provider} from 'react-redux';
import myStore from './Component/Library/ReduxStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={myStore} >
    <App />
  </Provider>
);

