import React from "react";

export const isAuthenticated = (email, password) => {

    for (let i = 0; i < localStorage.length; i++) {

        let key = localStorage.key(i);
        let user = JSON.parse(localStorage.getItem(key));

        if (key === email.toString() && user.password === password.toString()) {
            return 1;
        }

    }
    return 0
};