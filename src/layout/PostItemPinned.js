import React, {Component} from 'react';

import './PostItemPinned.css';

class PostItemPinned extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <a href={this.props.url}>
        <div id="postItem" align="left">
          <div id="postThumbnail">
            <img src={require("/home/server/web/src/posts/" + this.props.thumbnail + ".png").default} />
          </div>
          <div id="postInfo">
            <div id="postInfoTitle">
              <a>
              !!Pinned!! {this.props.title}
              </a>
            </div>
            <div id="postInfoTag">
              <a>
                #{this.props.tag}
              </a>
            </div>
            <div id="postInfoDate">
              <a>
                {this.props.date}
              </a>
            </div>
          </div>
        </div>
      </a>
    )
  }
}

export default PostItemPinned;