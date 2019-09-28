import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'

import App from "./components/App";

const store = createStore(reducer, applyMiddleware(thunk))



ReactDOM.render(<Provider><App /></Provider>, document.getElementById("root"));
