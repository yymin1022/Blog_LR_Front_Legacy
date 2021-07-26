import React, {useEffect}, {useState} from "react";
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
    const [isAnimated, onLoadAnimation] = useState(false);

    const {
        className,
        btnAction,
    } = props;

    useEffect(() => {
        return () => {
            onLoadAnimation(true);
        }
    }, []);

    return (
        <div
            id="LeftMenu"
            className={className}
            style={Object.assign({}, headerStyles.headerLoading, {isAnimated} && headerStyles.headerLoaded)}>
            <div id="menuTop">
                <IconButton onClick={btnAction} edge="start" className={useStyles().menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={useStyles().title}>
                    LR의 IT블로그
                </Typography>
            </div>
            <div id="menuBottom">
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

const headerStyles = {
    headerLoaded: {
        backgroundColor: "#164EAB",
        position: "fixed",
        
        left: 0,
        top: 0,
    
        height: "100%",
        width: 550,
    },

    headerLoading: {

    }
}

Header.propTypes = {
    className: PropTypes.string,
}

export default Header;