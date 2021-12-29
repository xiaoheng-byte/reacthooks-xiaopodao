import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import AppRouter from "./router"
import reportWebVitals from './reportWebVitals';
import "./style.less";
import './assets/css/common.less';
import './assets/css/font.css';
import './assets/css/iconfont.css';
import { Provider } from "react-redux"
import store from "./redux/store"

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
