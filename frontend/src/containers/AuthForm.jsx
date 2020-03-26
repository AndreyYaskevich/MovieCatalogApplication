import React from "react";
import "./AuthForm.css";

const AuthForm = ({children, title}) => (

    <div className="form-container">
        <div className="auth-form">
            <p>{title}</p>
            {children}
        </div>
    </div>
);

export default AuthForm;
