import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Potato from './Potato';

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
); // 하나의 component만 rendering 가능, jsx : 자바스크립트 + html(html inside javascript)
