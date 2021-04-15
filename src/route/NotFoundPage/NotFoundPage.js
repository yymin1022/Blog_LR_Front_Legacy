import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./NotFoundPage.css";
import DefConLogo from '/home/server/web/src/image/DefCon_Logo.svg';

class NotFoundPage extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div id="Container">
        <div id="Content" align="center">
          <img id="DefConLogo" src={DefConLogo} />

          <h3>Page Not Found !</h3>
          <Link to={"/"}>
            <h3>Home</h3>
          </Link>
        </div>
      </div>
    )
  }
}

export default NotFoundPage;