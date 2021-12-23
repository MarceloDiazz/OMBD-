import React from "react";
import ReactDOM from "react-dom";
/* import "bootswatch/dist/vapor/bootstrap.min.css"; */
import "bootstrap/dist/css/bootstrap.min.css";
/* import "bootswatch/dist/lux/bootstrap.min.css"; */
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
