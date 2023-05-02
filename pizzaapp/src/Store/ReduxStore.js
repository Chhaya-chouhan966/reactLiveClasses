import { applyMiddleware, legacy_createStore } from "redux";
import BasicReducer from "./ReducerStore";
import logger from "redux-logger";


const ReduxStore=legacy_createStore(BasicReducer, applyMiddleware(logger))

export default ReduxStore;