import React, { Component } from 'react';
import './HeaderBar.css';

class HeaderBar extends Component {

    render() {
        return (
            <div id="div-header">
                <div className="header title">
                    <p className="p-title" >1인개발자 LR의 IT블로그</p>
                </div>

                <div className="header menu" align="right">
                    <a className="a-menu" href="https://blog-lr.defcon.or.kr" target="_self">Post</a>
                    <a className="a-menu" target="_self">About</a>
                </div>
            </div>
        );
    }
}

export default HeaderBar;