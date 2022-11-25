import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./assets/style/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  </Provider>
);
