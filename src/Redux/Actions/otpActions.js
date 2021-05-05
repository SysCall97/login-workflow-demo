import { emailOtp } from "../../Helper/emailOtp";
import { OTP_REQUEST, OTP_REQUEST_FAILURE, OTP_REQUEST_SUCCESS } from "../actionTypes";

const otpRequest = () => {
    return {
        type: OTP_REQUEST
    }
}

const otpRequestSuccess = (message) => {
    return {
        type: OTP_REQUEST_SUCCESS,
        payload: {
            message
        }
    }
}

const otpRequestFailure = (message) => {
    return {
        type: OTP_REQUEST_FAILURE,
        payload: {
            message
        }
    }
}

const sendOtp = ({ email = '', phone = '', via = '' }) => {
    return async (dispatch) => {
        dispatch(otpRequest());
        if (via === 'email' && !!email.length) {
            await emailOtp({ email })
                .then((response) => dispatch(otpRequestSuccess(response)))
                .catch((error) => dispatch(otpRequestFailure(error)));
        } else if (via === 'phone' && !!phone.length) {

        } else {

        }
    }
}

export {
    sendOtp
}