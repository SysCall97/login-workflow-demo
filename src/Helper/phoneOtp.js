import { getOTP } from "./getOtp";
import { userList } from "./users";

const phoneOtp = ({ phone }) => {
    const val = Math.floor(Math.random() * 100);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = userList.find((ele) => ele.phone === phone);
            if (!user) {
                reject('Phone number not found')
            } else {
                const index = userList.indexOf(user);
                const otp = getOTP(4);
                if(val < 80) {
                    userList[index].otp = otp;
                    console.log('phone: ', phone);
                    console.log('otp: ', otp);
                    resolve('OTP send to your phone');
                } else {
                    reject('OTP send failed. Please try again.');
                }
            }
        }, 2000);
    });
}

export {
    phoneOtp
}