import React from 'react';
import './App.css';
import HomePage from './pages/Home/Home';
import HomePassenger from './pages/Passenger/Home';
import HomeDriver from './pages/Driver/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import OnlyTest from './OnlyTest';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

    document.body.style.overflow = "visible";

    return ( 
        <Router>
        <div className="App">
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/passenger/allspots" component={HomePassenger}></Route> 
            <Route path="/driver/spots" component={HomeDriver}></Route> 
            <Route path="/driver/spots" component={HomeDriver}></Route> 
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/test" component={OnlyTest}></Route>
        </div>
        </Router>
    );
}

export default App;