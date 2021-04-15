import React, {Component} from "react";

class NotFoundPage extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <h3>404 Not Found</h3>

        <div>
          <Link to={"/"}>
            <h3>Home</h3>
          </Link>
          <Link to={"/about"}>
            <h3>About</h3>
          </Link>
        </div>
      </div>
    )
  }
}

export default NotFoundPage;