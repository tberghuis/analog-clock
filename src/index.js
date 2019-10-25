import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Clock from "./Clock";

// ReactDOM.render(<Tmp />, document.getElementById("root"));
ReactDOM.render(
  <>
    <Clock />
    <App />
  </>,
  document.getElementById("root")
);
