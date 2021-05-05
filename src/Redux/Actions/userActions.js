import { signinAPICall } from "../../Helper/loginAPI"
import { registerAPICall } from "../../Helper/registerAPI"
import { CLOSE_NOTIFICATION, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../actionTypes"

const startProcess = () => {
    return {
        type: REGISTER_REQUEST
    }
}

const processSuccess = (data) => {
    return {
        type: REGISTER_SUCCESS,
        payload: {
            token: data
        }
    }
}

const processFailure = (data) => {
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
                dispatch(processSuccess(response.token));
            })
            .catch((error) => {
                dispatch(processFailure(error))
            });
    }
}

const signIn = ({phone, password}) => {
    return async (dispatch) => {
        dispatch(startProcess());
        // mock API call;
        await signinAPICall({ phone, password })
            .then((response) => {
                dispatch(processSuccess(response.token));
            })
            .catch((error) => {
                dispatch(processFailure(error))
            });
    }
}

export {
    register, signIn, closeNotification
}