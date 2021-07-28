import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import SideMenu from "./SideMenu";
import Section from "./Section";

import clsx from "clsx";

import List from "@material-ui/core/List";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import {makeStyles} from "@material-ui/core/styles";

import "./Default.css"

const drawerStyle = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
});


const Default = props => {
    const {
        className,
        children,
    } = props;

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const anchor = "left";

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setState({...state, [anchor]: open});
    };
    
    const list = (anchor) => (
        <div
            className={clsx(drawerStyle().list, {
              [drawerStyle().fullList]: anchor === "top" || anchor === "bottom",
          })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}>
            <div>
                <img
                  src={process.env.PUBLIC_URL + "/images/img_drawer_top.png"}
                  width="100%"
                  alt="testA" />
            </div>
          
            <List>
                <Link to={{
                    pathname: "/",
                    state:{
                        categoryID: "all"
                    }}}>
                    <div id="NavContainer">
                        <p style={{color: "#333333"}}>All Posts</p>
                    </div>
                </Link>

                <Link to={{
                    pathname: "/",
                    state:{
                        categoryID: "dev"
                    }}}>
                    <div id="NavContainer">
                        <p style={{color: "#333333"}}>Development</p>
                    </div>
                </Link>
                
                <Link to={{
                    pathname: "/",
                    state:{
                        categoryID: "os"
                    }}}>
                    <div id="NavContainer">
                        <p style={{color: "#333333"}}>Operating System</p>
                    </div>
                </Link>
                
                <Link to={{
                    pathname: "/",
                    state:{
                        categoryID: "synology"
                    }}}>
                    <div id="NavContainer">
                        <p style={{color: "#333333"}}>Synology/XPEnology</p>
                    </div>
                </Link>
            </List>
        </div>
    );
    
    return (
        <div id="Container" className={className}>
            <SideMenu btnAction={toggleDrawer(anchor, true)}/>

            <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}>
                {list(anchor)}
            </SwipeableDrawer>

            <Section>
                {children}
            </Section>
        </div>
    );
}

Default.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export default Default;