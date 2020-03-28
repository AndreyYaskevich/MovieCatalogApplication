import React from 'react';
import './App.css';
import Login from "./containers/Login";
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import MainPage from "./containers/MainPage";
import SignUp from "./containers/SignUp";
import {PrivateRoute} from "./containers/PrivateRoute";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path="/" render={() => <Redirect to="/login"/>}/>
                <Route path="/login" render={() => <Login/>}/>
                <PrivateRoute path="/mainPage" component={MainPage}/>
                <Route path="/signUp" render={() => <SignUp/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
