import { CLOSE_NOTIFICATION, OTP_REQUEST, OTP_REQUEST_FAILURE, OTP_REQUEST_SUCCESS } from "../actionTypes"

const initialState = {
    loading: false,
    showNotification: false,
    successMessage: '',
    errorMessage: '',
}

const otpReducer = (state = initialState, action) => {
    switch (action.type) {
        case OTP_REQUEST: return {
            loading: true,
            showNotification: false,
            successMessage: '',
            errorMessage: '',
        }

        case OTP_REQUEST_SUCCESS: return {
            loading: false,
            showNotification: true,
            successMessage: action.payload.message,
            errorMessage: '',
        }
        case OTP_REQUEST_FAILURE: return {
            loading: false,
            showNotification: true,
            successMessage: '',
            errorMessage: action.payload.message,
        }
        case CLOSE_NOTIFICATION: return {
            ...state,
            showNotification: false,
        }
        default: return state
    }
}

export {
    otpReducer
}