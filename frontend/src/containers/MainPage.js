import React from "react";
import "./MainPage.css";
import {NavLink} from "react-router-dom";

export default function MainPage() {
    return (
        <div className="mainpage">
            <div><h3>MainPage</h3></div>
            <div><NavLink to="/login">Log out</NavLink></div>

        </div>
    )
}