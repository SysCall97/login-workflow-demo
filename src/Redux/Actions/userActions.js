import { registerAPICall } from "../../Helper/registerAPI"
import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../actionTypes"

const registerRequest = () => {
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

const register = ({ phone, name, email, password }) => {
    return async (dispatch) => {
        dispatch(registerRequest());
        // mock API call;
        registerAPICall({ phone, name, email, password })
            .then((response) => {
                dispatch(registerSuccess(response.token));
            })
            .catch((error) => {
                dispatch(registerFailure(error))
            });
    }
}

export {
    register
}