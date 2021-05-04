import { userList } from "./users"

const registerAPICall = ({ phone, name, email, password }) => {
    const val = Math.floor(Math.random() * 100);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (val < 60) {
                const id = userList.length + 1;
                userList.push({ id, phone, name, email, password });
                resolve({token: `phfGaeiu9irpjwLaHHroTerji${id}`})
            } else {
                console.log('rejected');
                reject('Something wrong. Try later');
            }
        }, 1000);

    });
}

export { registerAPICall };