import React from "react";
import {BrowserRouter as Router, Switch, withRouter} from "react-router-dom";

import RouteLayout from "./layout/RouteLayout";
import DefaultLayout from "./layout/Default";

import About from "./route/About";
import Blog from "./route/Blog";
import Home from "./route/Home";
import NotFoundPage from "./route/NotFoundPage";
import PostView from "./route/PostView";
import Project from "./route/Project";
import ScrollTop from "./ScrollTop";

const App = () => {
    return (
        <Router>
            <ScrollTop>
                <Switch>
                    <RouteLayout
                        exact
                        path = "/"
                        layout = {DefaultLayout}
                        component = {withRouter(Home)} />
                    <RouteLayout
                        exact
                        path = "/blog"
                        layout = {DefaultLayout}
                        component = {withRouter(Blog)} />
                    <RouteLayout
                        exact
                        path = "/project"
                        layout = {DefaultLayout}
                        component = {withRouter(Project)} />
                    <RouteLayout
                        exact
                        path = "/about"
                        layout = {DefaultLayout}
                        component = {withRouter(About)} />
                    <RouteLayout
                        exact
                        path = "/postview/:postID"
                        layout = {DefaultLayout}
                        component = {withRouter(PostView)} />
                    <RouteLayout
                        layout = {DefaultLayout}
                        component = {withRouter(NotFoundPage)} />
                </Switch>
            </ScrollTop>
        </Router>
    );
}

export default App;