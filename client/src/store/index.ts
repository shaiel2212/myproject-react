import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import { authReducer } from "./reducers/authReducer"
import {vacationsReducer} from "./reducers/vacationsReducer"
import {modalReducer} from "./reducers/modalReducers"
const rootReducer = combineReducers({
    authReducer,
    vacationsReducer,
    modalReducer
});
export const store = createStore(rootReducer);