import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, hashHistory} from 'react-router';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
  </Router>,
  document.getElementById('root')
);
