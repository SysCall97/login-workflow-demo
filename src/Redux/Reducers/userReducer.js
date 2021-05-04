import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../actionTypes"

const initialState = {
    loading: false,
    error: '',
    token: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_REQUEST: return {
            loading: true,
            error: '',
            token: ''
        }
        case REGISTER_SUCCESS: return {
            loading: false,
            error: '',
            token: action.payload.token
        }
        case REGISTER_FAILURE: return {
            loading: false,
            error: action.payload.errorMessage,
            token: ''
        }
        default: return state
    }
}

export {
    userReducer
}