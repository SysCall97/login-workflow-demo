import { emailOtp } from "../../Helper/emailOtp";
import { phoneOtp } from "../../Helper/phoneOtp";
import { signInViaOtp } from "../../Helper/signInViaOtp";
import { CLOSE_NOTIFICATION, LOGIN_SUCCESSFULL, OTP_REQUEST, OTP_REQUEST_FAILURE, OTP_REQUEST_SUCCESS, SEND_SUCCESS_STATUS_OFF } from "../actionTypes";

const startProcess = () => {
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

const loginSuccessfull = (message) => {
    return {
        type: LOGIN_SUCCESSFULL,
        payload: {
            message
        }
    }
}

const loginFailure = (message) => {
    return {
        type: loginFailure,
        payload: {
            message
        }
    }
}

const closeOtpNotification = () => {
    return {
        type: CLOSE_NOTIFICATION
    }
}

const sendOtp = ({ email = '', phone = '', via = '' }) => {
    return async (dispatch) => {
        dispatch(startProcess());
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

const otpSiginIn = ({ otp }) => {
    return async (dispatch) => {
        console.log(otp);
        dispatch(startProcess());
        await signInViaOtp({ otp })
            .then((response) => {
                dispatch(loginSuccessfull(response));
            })
            .catch((error) => {
                dispatch(loginFailure(error))
            });
    }
}

export {
    sendOtp,
    sendSuccessOff,
    closeOtpNotification,
    otpSiginIn
}