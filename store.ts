import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer/index";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";

export default createStore(reducer, applyMiddleware(logger, ReduxThunk));
