import React from 'react';
import './App.css';
import Login from "./containers/Login";
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Redirect from="/" to="/login"></Redirect>
                <Route path="/" render={() => <Login/>}></Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
