import React from "react";
import "./MainPage.css";
import {NavLink} from "react-router-dom";
import {UserLogout} from "./UserLogout";

export default function MainPage() {
    return (
        <div className="mainpage">
            <div><h3>MainPage</h3></div>
            <div><NavLink to="/login"><button onClick={UserLogout}>Log out</button></NavLink></div>

        </div>
    )
}