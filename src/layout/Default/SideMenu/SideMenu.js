import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import "./SideMenu.css";

const SideMenu = (props) => {
    const {
        className,
        btnAction,
    } = props;

    return (
        <div
            id="SideMenu"
            className={className}>
            <div id="SideMenuTop">
                <IconButton onClick={btnAction} edge="start" id="SideMenuButton" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <div id="SideMenuTitle">
                    <p>
                        LR의 IT블로그
                    </p>
                </div>
                
            </div>

            <div id="SideMenuBottom">
                <Link to={"/"}>
                    <Button style={{color: "#FFFFFF"}}>Home</Button>
                </Link>
                <Link to={"/about"}>
                    <Button style={{color: "#FFFFFF"}}>About</Button>
                </Link>
            </div>
        </div>
    );
}

SideMenu.propTypes = {
    className: PropTypes.string,
}

export default SideMenu;