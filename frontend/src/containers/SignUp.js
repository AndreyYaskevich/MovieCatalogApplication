import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import AuthForm from "./AuthForm";
import {userAuthentication} from "./UserAuthentication";
import {isUserExist} from "./IsUserExist";

const SignUp = () => {

        const [username, setUsername] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const Register = (e) => {
            e.preventDefault();
            if (isUserExist(email)) {

                alert("This user already exists")
            } else {
                //addUser(username, email, password);

                return userAuthentication(email, password, username)
            }
        };

        return (
            <AuthForm title="Register">
                <div><input placeholder="Username"
                            autoFocus
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}>
                </input></div>
                <input placeholder="Email adress"
                       autoFocus
                       type="text"
                       onChange={(e) => setEmail(e.target.value)}>
                </input>
                <input placeholder="Password"
                       type="password"
                       onChange={(e) => setPassword(e.target.value)}>
                </input>
                <div>
                </div>
                <NavLink to="/login">
                    <button>Sign In</button>
                </NavLink>
                <NavLink to="/mainPage">
                    <button onClick={Register} disabled={!(email && password && username)}>Register</button>
                </NavLink>
            </AuthForm>
        )
    }
;

export default SignUp;