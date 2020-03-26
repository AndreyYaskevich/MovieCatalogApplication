import React from "react";
import {Redirect} from "react-router-dom";

export const succesfulAuth = (email, password) => {

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let user = JSON.parse(localStorage.getItem(key));

        if (key == email.toString() && user.password == password.toString()) {
            return window.location.href = "/mainPage";

        }
    }
        return alert("Error! User not found");

};