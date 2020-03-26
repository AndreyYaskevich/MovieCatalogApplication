import React, {useState} from "react";
import "./AuthForm.css";
import {Link, NavLink} from "react-router-dom";
import AuthForm from "./AuthForm";
import {AddUser} from "../AddUser";
import {succesfulAuth} from "./succesfulAuth";


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const authentication = (e) => {
        e.preventDefault();
        succesfulAuth(email, password)
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
                        onClick={authentication}
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
