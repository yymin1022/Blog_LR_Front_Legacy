import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './PostItemPinned.css';

class PostItemPinned extends Component {
  constructor() {
    super();
    this.state = {};
  }

  UNSAFE_componentWillMount() {
    this.date = this.props.date;
    this.tag = "";
    this.thumbnail = this.props.thumbnail;
    this.title = this.props.title;
    this.url = this.props.url;

    switch(this.props.tag){
      case "dev":
        this.tag = "#Development #Programming"
        break;
      case "os":
        this.tag = "#OS #Linux #Unix #Windows"
        break;
      case "synology":
        this.tag = "#NAS #Synology #XPEnology"
        break;
    }
  }

  render() {
    return(
      <Link
        to={{
          pathname: "/postview/" + this.url,
          state: {
            postDate: this.date,
            postTag: this.tag,
            postTitle: this.title,
          }
        }}>
        <div id="postPinnedItem" align="left">
          <div id="postPinnedThumbnail">
            <img src={require("/home/server/web/src/posts/" + this.thumbnail + ".png").default} />
          </div>
          <div id="postPinnedInfo">
            <div id="postPinnedInfoTitle">
              <p>
              {this.title}
              </p>
            </div>
            <div id="postPinnedInfoTag">
              <p>
                {this.tag}
              </p>
            </div>
            <div id="postPinnedInfoDate">
              <p>
                {this.date}
              </p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default PostItemPinned;