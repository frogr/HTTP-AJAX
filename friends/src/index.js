import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ReduxPromise from "redux-promise";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import FriendsList from "./components/FriendsList.js";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <FriendsList />
  </Provider>,
  document.getElementById("root")
);
