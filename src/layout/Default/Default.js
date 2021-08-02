import React from "react";
import PropTypes from "prop-types";

import SideMenu from "./SideMenu";
import Section from "./Section";

import "./Default.css"

const Default = (props) => {
    const {
        className,
        children,
    } = props;
    
    return (
        <div id="Container" className={className}>
            <SideMenu />

            <Section>
                {children}
            </Section>
        </div>
    );
}

Default.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export default Default;