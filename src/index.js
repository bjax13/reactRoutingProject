import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Home from './Home';
import Store from './Store';
import Nav from './Nav';
import './index.css';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route component={Nav}>
      <Route path="/" component={Home} />
      <Route path="store" component={Store} />
    </Route>
  </Router>,
  document.getElementById('root')
);
