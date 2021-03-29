import React, {Component} from 'react';

class PostItemPinned extends Component {
  constructor() {
    super();
    this.state = {};
  }  

  render() {
    return(
      <div>
        <a href={this.props.url}>
          !!Pinned Post!!{this.props.title}({this.props.date}) : {this.props.file}
        </a>
      </div>
    )
  }
}

export default PostItemPinned;