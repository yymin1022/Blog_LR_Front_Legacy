import React, {Component} from 'react';

import './PostItemPinned.css';

class PostItemPinned extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <div id="postItem">
        <div id="postThumbnail">
          <img src={require("/home/server/web/src/posts/" + this.props.thumbnail + ".png").default} />
        </div>
        <div id="postInfo">
          <div id="postInfoTitle">
            <a href={this.props.url}>
              !!Pinned!! {this.props.title}
            </a>
          </div>
          <div id="postInfoDate">
            <a>
              {this.props.date}
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default PostItemPinned;