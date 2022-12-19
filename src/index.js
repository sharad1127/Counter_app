import React from 'react';
import ReactDOM from 'react-dom';
// import App from '../src/component/redux';
import { Provider } from "react-redux";
import App from './App';
import { store } from './component/redux/store';




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);