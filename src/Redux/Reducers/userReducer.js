import { CLOSE_NOTIFICATION, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../actionTypes"

const initialState = {
    loading: false,
    error: '',
    token: '',
    showNotification: false,
    
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_REQUEST: return {
            loading: true,
            error: '',
            token: '',
            showNotification: false
        }
        case REGISTER_SUCCESS: return {
            loading: false,
            error: '',
            token: action.payload.token,
            showNotification: true
        }
        case REGISTER_FAILURE: return {
            loading: false,
            error: action.payload.errorMessage,
            token: '',
            showNotification: true
        }
        case CLOSE_NOTIFICATION: return {
            ...state,
            showNotification: false
        }
        default: return state
    }
}

export {
    userReducer
}