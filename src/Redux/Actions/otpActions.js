import { emailOtp } from "../../Helper/emailOtp";
import { phoneOtp } from "../../Helper/phoneOtp";
import { CLOSE_NOTIFICATION, OTP_REQUEST, OTP_REQUEST_FAILURE, OTP_REQUEST_SUCCESS, SEND_SUCCESS_STATUS_OFF } from "../actionTypes";

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

const sendSuccessOff = () => {
    return {
        type: SEND_SUCCESS_STATUS_OFF
    }
}

const closeOtpNotification = () => {
    return {
        type: CLOSE_NOTIFICATION
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
            await phoneOtp({ phone })
                .then((response) => dispatch(otpRequestSuccess(response)))
                .catch((error) => dispatch(otpRequestFailure(error)));
        }
    }
}

export {
    sendOtp,
    sendSuccessOff,
    closeOtpNotification
}