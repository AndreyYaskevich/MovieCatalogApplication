import React, {useState} from "react";
import "./Login.css";
import {FormControl, FormGroup, FormLabel} from "react-bootstrap";

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
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <div><FormLabel>Email:</FormLabel></div>
                    <FormControl
                        autoFocus
                        type="text"
                        onChange={e => setEmail(e.target.value)}>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <div><FormLabel>Password</FormLabel></div>
                    <FormControl
                        type="password"
                        onChange={e => setPassword(e.target.value)}>
                    </FormControl>
                </FormGroup>
                <button

                    type="submit" onClick={checkStatus} disabled={!(email && password)}>Login
                </button>
            </form>
        </div>
    )
}