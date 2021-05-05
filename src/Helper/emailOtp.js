import { getOTP } from "./getOtp";
import { userList } from "./users";

const emailOtp = ({ email }) => {
    const val = Math.floor(Math.random() * 100);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = userList.find((ele) => ele.email === email);
            if (!user) {
                reject('Email not found')
            } else {
                const index = userList.indexOf(user);
                const otp = getOTP(4);
                if(val < 80) {
                    userList[index].otp = otp;
                    console.log('email: ', email);
                    console.log('otp: ', otp);
                    resolve('OTP send to your email');
                } else {
                    reject('OTP send failed. Please try again.');
                }
            }
        }, 2000);
    });
}

export {
    emailOtp
}