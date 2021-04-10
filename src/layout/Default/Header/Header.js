import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import MenuIcon from "@material-ui/icons/Menu";

import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";

const Container = styled.div`
  background-color: #164EAB;
  position: fixed;
  
  left: 0;
  top: 0;

  height: 56px;
  width: 100%;
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
    btnAction,
  } = props;

  return (
    <Container className={className}>
      <div className={useStyles().root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={btnAction} edge="start" className={useStyles().menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={useStyles().title}>
              LR의 IT블로그
            </Typography>
            <Link to={"/home"}>
              <Button style={{color: "#FFFFFF"}}>Home</Button>
            </Link>
            <Link to={"/about"}>
              <Button style={{color: "#FFFFFF"}}>About</Button>
            </Link>
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