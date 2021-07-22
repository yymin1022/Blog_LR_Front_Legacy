import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import Header from "./Header";
import Section from "./Section";

import clsx from "clsx";

import List from "@material-ui/core/List";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

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

const NavContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: -10px;
  margin-left: 10px;
  margin-top: -10px;
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
          <NavContainer>
            <p style={{color: "#333333"}}>All Posts</p>
          </NavContainer>
        </Link>
        <Link to={{
          pathname: "/",
          state:{
            categoryID: "dev"
          }}}>
          <NavContainer>
            <p style={{color: "#333333"}}>Development</p>
          </NavContainer>
        </Link>
        <Link to={{
          pathname: "/",
          state:{
            categoryID: "os"
          }}}>
          <NavContainer>
            <p style={{color: "#333333"}}>Operating System</p>
          </NavContainer>
        </Link>
        <Link to={{
          pathname: "/",
          state:{
            categoryID: "synology"
          }}}>
          <NavContainer>
            <p style={{color: "#333333"}}>Synology/XPEnology</p>
          </NavContainer>
        </Link>
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