import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

import "./Header.css";

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
        <div id="LeftMenu" className={className}>
            <IconButton onClick={btnAction} edge="start" className={useStyles().menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={useStyles().title}>
                LR의 IT블로그
            </Typography>
            <Link to={"/"}>
                <Button style={{color: "#FFFFFF"}}>Home</Button>
            </Link>
            <Link to={"/about"}>
                <Button style={{color: "#FFFFFF"}}>About</Button>
            </Link>
        </div>
    );
}

Header.propTypes = {
    className: PropTypes.string,
}

export default Header;