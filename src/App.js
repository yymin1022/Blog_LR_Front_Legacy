import React from "react";
import {BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import {Route} from 'react-router-dom';

import RouteLayout from "./layout/RouteLayout";
import DefaultLayout from "./layout/Default";

import About from "./route/About";
import Home from "./route/Home";
import NotFoundPage from "./route/NotFoundPage";
import PostView from "./route/PostView";
import ScrollTop from "./ScrollTop";

function App() {
  return (
    <Router>
      <ScrollTop>
        <Switch>
          <Redirect
            exact
            from = "/"
            to = "/home" />
          <RouteLayout
            path = "/about"
            layout = {DefaultLayout}
            component = {About} />
          <RouteLayout
            path = "/home"
            layout = {DefaultLayout}
            component = {Home} />
          <RouteLayout
            path = "/postview/:postID"
            layout = {DefaultLayout}
            component = {PostView} />
          <Route
            component = {NotFoundPage} />
        </Switch>
      </ScrollTop>
    </Router>
  );
}

export default App;