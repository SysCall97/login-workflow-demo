import { MESSAGES } from "./const";
import { userList } from "./users"

const registerAPICall = ({ phone, name, email, password }) => {
    const val = Math.floor(Math.random() * 100);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (val < 70) {
                const id = userList.length + 1;
                userList.forEach((user) => {
                    if(user.email === email) {
                        reject(MESSAGES.emailAlreadyUsed);
                    } else if(user.phone === phone) {
                        reject(MESSAGES.phoneAlreadyUsed);
                    }
                })
                userList.push({ id, phone, name, email, password });
                resolve({token: `signuptoken${id}`})
            } else {
                reject(MESSAGES.unknownError);
            }
        }, 1000);

    });
}

export { registerAPICall };