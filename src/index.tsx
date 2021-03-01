import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import { App } from "./component/app/App";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
