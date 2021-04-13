import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Section from "./Section";

import clsx from "clsx";

import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import DrawerBG from "/home/server/web/src/image/img_drawer_top.png";
import SearchIcon from "@material-ui/icons/Search";

import styled, {createGlobalStyle} from "styled-components";
import {makeStyles} from "@material-ui/core/styles";

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%
 }
	body {
		padding: 0;
    margin: 0;
 }
  #root {
    height: 100%;
 }
`;

const drawerStyle = makeStyles({
  list: {
    width: 250,
 },
  fullList: {
    width: "auto",
 },
});

const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 150px;
  padding-left: 50px;
  padding-right: 50px;

  height: 100%;

  /* Mobile UI */
  @media screen and (max-width: 768px){
    padding-top: 85px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

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
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <img
          src={DrawerBG}
          width="100%"
          alt="testA" />
      </div>


      <List>
        <ListItem button component="a">
          <ListItemIcon><SearchIcon /></ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component="a" href="/home">
          <ListItemText primary="All Posts" />
        </ListItem>
        <ListItem button component="a" href="/home?category=dev">
          <ListItemText primary="Development" />
        </ListItem>
        <ListItem button component="a" href="/home?category=os">
          <ListItemText primary="Operating System" />
        </ListItem>
        <ListItem button component="a" href="/home?category=synology">
          <ListItemText primary="Synology/XPEnology" />
        </ListItem>
      </List>
    </div>
  );
  
  return (
    <Container className={className}>
      <GlobalStyle />
      <Header btnAction={toggleDrawer(anchor, true)}/>
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
    </Container>
  );
}

Default.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Default;