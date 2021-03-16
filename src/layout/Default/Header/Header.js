import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {openDrawer} from '../Default'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 56px;
  width: 100%;

  background-color: skyblue;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = props => {
  const {
    className,
  } = props;
  
  return (
    <Container className={ className }>
      <div className={useStyles().root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={openDrawer(), console.log("Pressed 1")} edge="start" className={useStyles().menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={useStyles().title}>
              LR's Blog
            </Typography>
            <Button onClick={openDrawer(), console.log("Pressed 1")} color="inherit">about</Button>
          </Toolbar>
        </AppBar>
      </div>
    </Container>
  );
}

Header.propTypes = {
  className: PropTypes.string,
}

export default Header;