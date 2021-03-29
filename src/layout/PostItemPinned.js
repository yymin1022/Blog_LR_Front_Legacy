import React, {Component} from 'react';

import './PostItemPinned.css';

class PostItemPinned extends Component {
  constructor() {
    super();
    this.state = {};
  }  

  render() {
    return(
      <div>
        <div id="postThumbnail">
          <img src={this.props.thumbnail} />
        </div>
        <div id="postInfo">
          <a href={this.props.url}>
            !!Pinned Post!!{this.props.title}({this.props.date}) : {this.props.file}
          </a>
        </div>
      </div>
    )
  }
}

export default PostItemPinned;