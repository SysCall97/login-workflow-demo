import { userList } from "./users";

const emailOtp = ({ email }) => {
    const val = Math.floor(Math.random() * 100);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = userList.find((ele) => ele.email === email);
            console.log(user);
            if (!user) {
                reject('Email not found')
            };
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
        }, 2000);
    });
}

const getOTP = (length) => {
    const result = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
}

export {
    emailOtp
}