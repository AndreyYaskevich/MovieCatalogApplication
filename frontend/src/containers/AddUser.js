import {user} from "./Users";

export const addUser = (name, email, password) => {

    const newUser = {
        name: name,
        email: email,
        password: password
    };

    return user.push(newUser)
};

