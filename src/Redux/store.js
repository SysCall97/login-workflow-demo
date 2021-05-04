import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./Reducers/userReducer";

const store = createStore(combineReducers({
    user: userReducer
}), applyMiddleware(thunk))

export {
    store
}