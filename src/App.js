import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import RouteLayout from './layout/RouteLayout';
import DefaultLayout from './layout/Default';

import Home from './route/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect
          exact
          from = '/'
          to = '/home'
        />
        <RouteLayout
          path = '/home'
          layout = { DefaultLayout }
          component = { Home }
        />
      </Switch>
    </Router>
  );
}

export default App;