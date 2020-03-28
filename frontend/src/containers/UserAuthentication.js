
export const userAuthentication = (email, password, username) => {

    let userInfo = {
        "username": username,
        "password": password
    };

    localStorage.clear();
    localStorage.setItem((email).toString(), JSON.stringify(userInfo));

    return window.location.href = "/mainPage"
};