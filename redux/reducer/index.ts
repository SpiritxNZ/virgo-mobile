import { combineReducers } from "redux";
import localeReducer from "./localeReducer";

export const rootReducer = combineReducers({ localeReducer });

export type AppState = ReturnType<typeof rootReducer>;
