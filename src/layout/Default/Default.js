import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';
import Section from './Section';

import clsx from 'clsx';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import SearchIcon from '@material-ui/icons/Search';

import styled, {createGlobalStyle} from 'styled-components';
import {makeStyles} from '@material-ui/core/styles';

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

const Container = styled.div`
  padding-top: 56px;
  height: 100%;

  padding-left: 240px;
`;

const Default = props => {
  const {
    className,
    children,
 } = props;

  const drawerStyle = makeStyles({
    list: {
      width: 250,
   },
    fullList: {
      width: 'auto',
   },
 });

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
 });

  const anchor = 'left';

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
   }

    setState({...state, [anchor]: open});
 };
  
  const list = (anchor) => (
    <div
      className={clsx(drawerStyle().list, {
        [drawerStyle().fullList]: anchor === 'top' || anchor === 'bottom',
     })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <ListItemLink>
        <ListItemIcon><SearchIcon/></ListItemIcon>
          <ListItemText primary="Search" />
        </ListItemLink>
      </List>
      <Divider/>
      <List>
        <ListItemLink href="/posts">
          <ListItemText primary="All Posts" />
        </ListItemLink>
        <ListItemLink href="/posts-dev">
          <ListItemText primary="Development" />
        </ListItemLink>
        <ListItemLink href="/posts-os">
          <ListItemText primary="Operating System" />
        </ListItemLink>
        <ListItemLink href="/posts-synology">
          <ListItemText primary="Synology/XPEnology" />
        </ListItemLink>
      </List>
    </div>
  );
  
  return (
    <Container className={className}>
      <GlobalStyle />
      <Header />
      <Button onClick = {toggleDrawer(anchor, true)}>Open Drawer</Button>
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
      <Footer />
    </Container>
  );
}

Default.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Default;