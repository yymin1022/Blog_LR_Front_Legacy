import React, {Component} from 'react';

import './PostItem.css';

class PostItem extends Component {
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
          <a href={this.props.url}>
            {this.props.title}({this.props.date})
          </a>
        </div>
      </div>
    )
  }
}

export default PostItem;