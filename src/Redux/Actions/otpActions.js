import { emailOtp } from "../../Helper/emailOtp"

const sendOtp = ({ email = '', phone = '', via = '' }) => {
    return async (dispatch) => {
        if (via === 'email' && !!email.length) {
            await emailOtp({ email })
                .then((response) => console.log(response))
                .catch((error) => console.log(error));
        } else if (via === 'phone' && !!phone.length) {

        } else {

        }
    }
}

export {
    sendOtp
}