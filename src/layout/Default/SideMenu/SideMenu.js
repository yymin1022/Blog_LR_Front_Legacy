import React from "react";
import PropTypes from "prop-types";

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
                        <FontAwesomeIcon icon={faFacebook} color="white" size="lg" />
                    </div>
                    <div className="snsNav">
                        <FontAwesomeIcon icon={faGithub} color="white" size="lg" />
                    </div>
                    <div className="snsNav">
                        <FontAwesomeIcon icon={faGooglePlay} color="white" size="lg" />
                    </div>
                    <div className="snsNav">
                        <FontAwesomeIcon icon={faInstagram} color="white" size="lg" />
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