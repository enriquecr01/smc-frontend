import React from 'react';
import './App.css';
import HomePage from './pages/Home/Home';
import HomePassenger from './pages/Passenger/HomePassenger';
import HomeDriver from './pages/Driver/HomeDriver';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import OnlyTest from './OnlyTest';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MomentUtils from "@date-io/moment";
// Si no funciona el import usar la instalacion de yarn
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

function App() {

    document.body.style.overflow = "visible";

    return ( 
        <Router>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <div className="App">
                    <Route exact path="/" component={HomePage}></Route>
                    <Route path="/passenger/allspots" component={HomePassenger}></Route> 
                    <Route path="/driver/spots" component={HomeDriver}></Route> 
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/test" component={OnlyTest}></Route>
                </div>
            </MuiPickersUtilsProvider>
        </Router>
    );
}

export default App;