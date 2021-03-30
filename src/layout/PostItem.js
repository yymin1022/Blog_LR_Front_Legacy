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
          <img src={this.props.file} />
        </div>
        <div id="postInfo">
          <a href={this.props.url}>
            {this.props.title}({this.props.date}) : {this.props.file}
          </a>
        </div>
      </div>
    )
  }
}

export default PostItem;