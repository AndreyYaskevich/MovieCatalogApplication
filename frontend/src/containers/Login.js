import React, {useState} from "react";
import "./Login.css";
import {NavLink} from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const checkStatus = () => {

        return console.log("its ok!")
    };

    const handleSubmit = (event) => {
        return event.preventDefault();
    };

    return (
        <div className="login-page">
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <input placeholder="email"
                           autoFocus
                           type="text"
                           onChange={e => setEmail(e.target.value)}>
                    </input>
                    <input placeholder="password"
                           type="password"
                           onChange={e => setPassword(e.target.value)}>
                    </input>
                    <div>
                        <NavLink to="/mainPage">
                            <button
                                type="submit" onClick={checkStatus} disabled={!(email && password)}>LOGIN
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/signUp">
                            <button>Sign up</button>
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}