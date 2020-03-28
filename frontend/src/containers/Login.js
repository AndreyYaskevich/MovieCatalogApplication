import React, {useState} from "react";
import "./AuthForm.css";
import {NavLink} from "react-router-dom";
import AuthForm from "./AuthForm";
import {userAuthentication} from "./UserAuthentication";
import {isUserExist} from "./IsUserExist";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Login = () => {
        if (isUserExist(email, password)) return userAuthentication(email, password);
        return alert("Wrong password, or this user doesn't exist")
    };

    return (
        <AuthForm title="Login">
            <>
                <input
                    placeholder="email"
                    autoFocus
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                >
                </input>
                <input
                    placeholder="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                >
                </input>
                <div>

                    <button
                        onClick={Login}
                    >
                        LOGIN
                    </button>
                </div>
                <div>
                    <NavLink to="/signUp">
                        <button>Sign up</button>
                    </NavLink>
                </div>
            </>
        </AuthForm>
    );
}
