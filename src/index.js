import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import dailyReport from "./reducer/DailyReport";
import districtReport from "./reducer/DistrictReport";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import thunk from "redux-thunk";

import App from "./App";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  dailyReport,
  districtReport
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
