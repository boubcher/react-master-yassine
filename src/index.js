import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home/Home';
import Show from './pages/show/Show';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
//react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



ReactDOM.render(
  <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/show" component={Show} />    
      </Switch>
  </Router>,
document.getElementById('root')
);

