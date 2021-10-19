import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tachyons";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./components/Loading";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor} />
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
