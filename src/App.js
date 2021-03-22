import React from 'react';
import {BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';

import RouteLayout from './layout/RouteLayout';
import DefaultLayout from './layout/Default';

import About from './route/About';
import Home from './route/Home';
import Posts from './route/Posts';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect
          exact
          from = '/'
          to = '/home' />
        <RouteLayout
          path = '/about'
          layout = {DefaultLayout}
          component = {About} />
        <RouteLayout
          path = '/home'
          layout = {DefaultLayout}
          component = {Home} />
        <RouteLayout
          path = '/posts'
          layout = {DefaultLayout}
          component = {Posts} />
      </Switch>
    </Router>
  );
}

export default App;