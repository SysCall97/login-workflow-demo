import { CLOSE_NOTIFICATION, OTP_REQUEST, OTP_REQUEST_FAILURE, OTP_REQUEST_SUCCESS, SEND_SUCCESS_STATUS_OFF } from "../actionTypes"

const initialState = {
    loading: false,
    showNotification: false,
    sendSuccess: false,
    successMessage: '',
    errorMessage: '',
}

const otpReducer = (state = initialState, action) => {
    switch (action.type) {
        case OTP_REQUEST: return {
            loading: true,
            showNotification: false,
            sendSuccess: false,
            successMessage: '',
            errorMessage: '',
        }

        case OTP_REQUEST_SUCCESS: return {
            loading: false,
            showNotification: false,
            sendSuccess: true,
            successMessage: action.payload.message,
            errorMessage: '',
        }
        case OTP_REQUEST_FAILURE: return {
            loading: false,
            showNotification: true,
            sendSuccess: false,
            successMessage: '',
            errorMessage: action.payload.message,
        }
        case CLOSE_NOTIFICATION: return {
            ...state,
            showNotification: false,
        }
        case SEND_SUCCESS_STATUS_OFF: return {
            ...state,
            sendSuccess: false,
        }
        default: return state
    }
}

export {
    otpReducer
}