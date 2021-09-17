import React from "react";
import {BrowserRouter as Router, Switch, withRouter} from "react-router-dom";

import RouteLayout from "./Layout/RouteLayout";
import DefaultLayout from "./Layout/Default";

import About from "./Route/About";
import Home from "./Route/Home";
import NotFoundPage from "./Route/NotFoundPage";
import PostList from "./Route/PostList";
import PostView from "./Route/PostView";
import ScrollTop from "./ScrollTop";

const App = (props) => {
    return(
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
                        component = {withRouter(PostList)} />
                    <RouteLayout
                        exact
                        path = "/project"
                        layout = {DefaultLayout}
                        component = {withRouter(PostList)} />
                    <RouteLayout
                        exact
                        path = "/about"
                        layout = {DefaultLayout}
                        component = {withRouter(About)} />
                    <RouteLayout
                        exact
                        path = "/postview/:postType/:postID"
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