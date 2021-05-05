import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { otpReducer } from "./Reducers/otpReducer";
import { userReducer } from "./Reducers/userReducer";

const store = createStore(combineReducers({
    user: userReducer,
    otp: otpReducer
}), applyMiddleware(thunk))

export {
    store
}