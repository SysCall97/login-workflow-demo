import { MESSAGES } from "./const";
import { userList } from "./users";

export const signInViaOtp = ({otp}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userEntry = userList.filter((user) => user.otp === otp);
            if(!!userEntry?.length) {
                resolve({token: `otpLoginToken${userEntry[0]?.id}`});
            } else {
                reject(MESSAGES.otpNotMatched);
            }
        }, 1000);

    });
}