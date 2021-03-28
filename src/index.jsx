import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./Redux";
import { loadState, saveState } from "./Redux/reduxStore/index";

import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";

const initialData = loadState();
const store = createStore(reducer, initialData);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
