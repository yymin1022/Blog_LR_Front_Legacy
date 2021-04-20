import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./PostItemPinned.css";

class PostItemPinned extends Component {
  constructor() {
    super();
    this.state = {};
  }

  UNSAFE_componentWillMount() {
    this.postDate = this.props.postDate;
    this.postTag = "";
    this.postThumbnail = this.props.postThumbnail;
    this.postTitle = this.props.postTitle;
    this.postURL = this.props.postURL;

    switch(this.props.postTag){
      case "dev":
        this.postTag = "#Development #Programming"
        break;
      case "os":
        this.postTag = "#OS #Linux #Unix #Windows"
        break;
      case "synology":
        this.postTag = "#NAS #Synology #XPEnology"
        break;
    }
  }

  render() {
    return(
      <Link to={"/postview/" + this.postURL}>
        <div id="postPinnedItem" align="left">
          <div id="postPinnedThumbnail">
            <img src={process.env.PUBLIC_URL + "/PostThumbnails/" + this.postThumbnail + ".png"} />
          </div>
          <div id="postPinnedInfo">
            <div id="postPinnedInfoTitle">
              <p>
              {this.postTitle}
              </p>
            </div>
            <div id="postPinnedInfoTag">
              <p>
                {this.postTag}
              </p>
            </div>
            <div id="postPinnedInfoDate">
              <p>
                {this.postDate}
              </p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default PostItemPinned;