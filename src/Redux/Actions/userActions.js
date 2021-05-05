import { signinAPICall } from "../../Helper/loginAPI"
import { registerAPICall } from "../../Helper/registerAPI"
import { CLOSE_NOTIFICATION, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../actionTypes"

const startProcess = () => {
    return {
        type: REGISTER_REQUEST
    }
}

const registerSuccess = (data) => {
    return {
        type: REGISTER_SUCCESS,
        payload: {
            token: data
        }
    }
}

const registerFailure = (data) => {
    return {
        type: REGISTER_FAILURE,
        payload: {
            errorMessage: data
        }
    }
}

const closeNotification = () => {
    return {
        type: CLOSE_NOTIFICATION
    }
}

const register = ({ phone, name, email, password }) => {
    return async (dispatch) => {
        dispatch(startProcess());
        // mock API call;
        await registerAPICall({ phone, name, email, password })
            .then((response) => {
                dispatch(registerSuccess(response.token));
            })
            .catch((error) => {
                dispatch(registerFailure(error))
            });
    }
}

const signIn = ({phone, password}) => {
    return async (dispatch) => {
        dispatch(startProcess());
        // mock API call;
        await signinAPICall({ phone, password })
            .then((response) => {
                dispatch(registerSuccess(response.token));
            })
            .catch((error) => {
                dispatch(registerFailure(error))
            });
    }
}

export {
    register, signIn, closeNotification
}