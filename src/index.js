import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Login from './Login';





ReactDOM.render(
  <Router>
  <div>
    <Navbar />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    </div>
  </Router>,
  document.getElementById('root')
);
