import React from 'react';
import './App.css';
import Login from "./containers/Login";
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import MainPage from "./containers/MainPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Redirect from="/" to="/login"/>
                <Route path="/login" render={() => <Login/>}/>
                <Route path="/mainPage" render={() => <MainPage/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
