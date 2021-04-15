import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./NotFoundPage.css";

class NotFoundPage extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div class="Container">
        <h3>404 Not Found</h3>

        <div class="Navigator">
          <Link to={"/"}>
            <h3>Home</h3>
          </Link>
        </div>
      </div>
    )
  }
}

export default NotFoundPage;