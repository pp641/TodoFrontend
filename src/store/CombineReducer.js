import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import reducerOne from "../part-one/reducers/reducerOne";

const store = createStore(reducerOne, applyMiddleware(logger, thunk, promise));

export default store;
