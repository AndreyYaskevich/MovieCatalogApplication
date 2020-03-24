import React from "react";
import "./SignUp.css";
import {NavLink} from "react-router-dom";

const SignUp = () => {
    return (
        <div className="signup-page">
            <form className="signup-form">
                <div><input placeholder="Username"
                            autoFocus
                            type="text">
                </input></div>
                <input placeholder="Email adress"
                       autoFocus
                       type="text">
                </input>
                <input placeholder="Password"
                       type="password">
                </input>
                <div>
                </div>
                <NavLink to="/login">
                    <button>Sign In</button>
                </NavLink>
                <NavLink to="/mainPage">
                    <button>Register</button>
                </NavLink>
            </form>
        </div>
    )
};

export default SignUp;