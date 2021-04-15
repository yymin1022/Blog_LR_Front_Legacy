import React, {Component} from "react";

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

          <h1>Page Not Found !</h1>
        </div>
      </div>
    )
  }
}

export default NotFoundPage;