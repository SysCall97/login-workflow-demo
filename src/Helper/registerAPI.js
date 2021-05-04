import { userList } from "./users"

const registerAPICall = ({ phone, name, email, password }) => {
    const val = Math.floor(Math.random() * 100);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (val < 70) {
                const id = userList.length + 1;
                userList.forEach((user) => {
                    if(user.email === email) {
                        reject('Email has already been taken');
                    } else if(user.phone === phone) {
                        reject('Phone number has already been taken');
                    }
                })
                userList.push({ id, phone, name, email, password });
                resolve({token: `signuptoken${id}`})
            } else {
                reject('Something wrong. Try later');
            }
        }, 1000);

    });
}

export { registerAPICall };