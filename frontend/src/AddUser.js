import {succesfulAuth} from "./containers/succesfulAuth";

export const AddUser = (email, password, username) => {

    let userInfo = {
        "username": username,
        "password": password
    };

    return (localStorage.setItem((email).toString(), JSON.stringify(userInfo)))

};