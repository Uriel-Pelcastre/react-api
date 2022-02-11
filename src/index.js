import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";
//import { AppProvider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./routers/App";
import { AppProvider, AppProvidercn } from "./context";


ReactDOM.render(



  <Provider store={store}>
 
    <AppProvider >
      <App />
    </AppProvider>
  
  </Provider>,
  document.getElementById("root")
);
