import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import App from './app';
import Home from './home';
import Learnings from './learnings';
import BlogPage from './blogPage';

// basic setup of router.
const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='learnings' component={Learnings} />
      <Route path='blog' component={BlogPage} />
    </Route>
  </Router>
);

export default routes;

