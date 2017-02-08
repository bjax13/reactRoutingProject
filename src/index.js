import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Home from './Home';
import './index.css';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
  </Router>,
  document.getElementById('root')
);
