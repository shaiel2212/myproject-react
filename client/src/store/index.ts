import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { teamsReducer } from "./reducers/teamsReducer";
import { authReducer } from "./reducers/authReducer"
import {vacationsReducer} from "./reducers/vacationsReducer"
import {modalReducer} from "./reducers/modalReducers"
const rootReducer = combineReducers({
    authReducer,
    teamsReducer,
    vacationsReducer,
    modalReducer
});
export const store = createStore(rootReducer);