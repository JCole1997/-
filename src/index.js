import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle1 } from "./style.js";
import { GlobalStyle2 } from "./statics/iconfont/iconfont"

ReactDOM.render(
  <Fragment>
    <GlobalStyle1 />
    <GlobalStyle2 />
    <App />
  </Fragment>,
  document.getElementById("root")
);
