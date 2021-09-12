import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faGooglePlay} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./SideMenu.css";

const SideMenu = (props) => {
    const {
        className,
    } = props;

    return (
        <div
            id="SideMenu"
            className={className}>
            <div id="SideMenuContent">
                <div id="SideMenuTitle">
                    <p>LR의</p>
                    <p>IT블로그</p>
                </div>

                <hr/>

                <div id="SideMenuNav">
                    <div className="snsNav">
                        <Link
                            to={{ 
                                pathname: "https://www.facebook.com/profile.php?id=100007285635473"
                            }}
                            target="_sub" >
                            <FontAwesomeIcon icon={faFacebook} color="white" size="lg" />
                        </Link>
                    </div>
                    <div className="snsNav">
                        <Link
                            to={{ 
                                pathname: "https://github.com/yymin1022"
                            }}
                            target="_sub" >
                            <FontAwesomeIcon icon={faGithub} color="white" size="lg" />
                        </Link>
                    </div>
                    <div className="snsNav">
                        <Link
                            to={{ 
                                pathname: "https://play.google.com/store/apps/developer?id=Dev.+LR"
                            }}
                            target="_sub" >
                            <FontAwesomeIcon icon={faGooglePlay} color="white" size="lg" />
                        </Link>
                    </div>
                    <div className="snsNav">
                        <Link
                            to={{ 
                                pathname: "https://instagram.com/useful_min"
                            }}
                            target="_sub" >
                            <FontAwesomeIcon icon={faInstagram} color="white" size="lg" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

SideMenu.propTypes = {
    className: PropTypes.string,
}

export default SideMenu;