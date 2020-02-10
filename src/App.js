import React from 'react';
import './App.css';
import HomePage from './pages/Home/Home';
import HomePassenger from './pages/Passenger/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return ( 
        <Router>
        <div className="App">
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/passenger" component={HomePassenger}></Route> 
        </div>
        </Router>
    );
}

export default App;