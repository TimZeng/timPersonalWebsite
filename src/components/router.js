import React from 'react';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import App from './app';
import Home from './home';
import Work from './work';
import Learnings from './learnings';

// basic setup of router.
const routes = (
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='work' component={ Work } />
      <Route path='learnings' component={ Learnings } />
    </Route>
  </Router>
);

export default routes;

