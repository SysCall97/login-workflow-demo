import { MESSAGES } from "./const";
import { userList } from "./users"

const signinAPICall = ({ phone, password }) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userEntry = userList.filter((user) => user.phone === phone);
            if(!!userEntry?.length) {
                if(userEntry[0]?.password === password) {
                    const id = userList.length + 1;
                    resolve({token: `loginToken${id}`});
                } else {
                    reject(MESSAGES.passwordNotMatched);
                }
            } else {
                reject(MESSAGES.userNotFound);
            }
        }, 1000);

    });
}

export { signinAPICall };