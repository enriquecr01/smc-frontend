import React from 'react';
import './App.css';
import HomePage from './pages/Home/Home';
import HomePassenger from './pages/Passenger/Home';
import HomeDriver from './pages/Driver/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return ( 
        <Router>
        <div className="App">
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/passenger/allspots" component={HomePassenger}></Route> 
            <Route path="/driver/spots" component={HomeDriver}></Route> 
        </div>
        </Router>
    );
}

export default App;