import React, {Component} from 'react';

import './PostItem.css';

class PostItem extends Component {
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
              <p>
                {this.props.title}
              </p>
            </div>
            <div id="postInfoTag">
              <p>
                #{this.props.tag}
              </p>
            </div>
            <div id="postInfoDate">
              <p>
                {this.props.date}
              </p>
            </div>
          </div>
        </div>
      </a>
    )
  }
}

export default PostItem;