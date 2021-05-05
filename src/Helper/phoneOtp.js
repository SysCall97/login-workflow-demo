import { MESSAGES } from "./const";
import { getOTP } from "./getOtp";
import { userList } from "./users";

const phoneOtp = ({ phone }) => {
    const val = Math.floor(Math.random() * 100);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = userList.find((ele) => ele.phone === phone);
            if (!user) {
                reject(MESSAGES.userNotFound)
            } else {
                const index = userList.indexOf(user);
                const otp = getOTP(4);
                if(val < 80) {
                    userList[index].otp = otp;
                    console.log('phone: ', phone);
                    console.log('otp: ', otp);
                    resolve(MESSAGES.otpSendToPhone);
                } else {
                    reject(MESSAGES.otpSendFailed);
                }
            }
        }, 2000);
    });
}

export {
    phoneOtp
}