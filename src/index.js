import React from 'react';
import ReactDOM from 'react-dom';
import './css/global.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
