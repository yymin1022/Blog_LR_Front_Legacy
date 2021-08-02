import React from "react";
import PropTypes from "prop-types";

import {faCamera} from "@fortawesome/free-regular-svg-icons";
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

                <div id="SideMenuNav">
                    <div className="snsNav">
                        <FontAwesomeIcon icon={faCamera} />
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