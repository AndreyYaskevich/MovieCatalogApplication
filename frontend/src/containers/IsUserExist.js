import {user} from "./Users";

export const isUserExist = (email, password) => {

    if (email === user.email && !user.password) return 1;
    else if (email === user.email && password === user.password) return 1;
    else return 0;
};