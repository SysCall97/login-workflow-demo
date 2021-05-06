import { MESSAGES } from "./const";
import { userList } from "./users";

export const signInViaOtp = ({otp}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = userList.find((ele) => ele.otp === otp);
            if(!user) {
                reject(MESSAGES.otpNotMatched);
            } else {
                const index = userList.indexOf(user);
                userList[index].otp = null;
                resolve({token: `otpLoginToken${user.id}`});
            }
        }, 1000);

    });
}