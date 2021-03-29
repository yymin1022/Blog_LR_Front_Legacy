import React, {Component} from 'react';

class PostItemPinned extends Component {
  constructor() {
    super();
    this.state = {};
  }  

  render() {
    return(
      <div>
        <a href={props.url}>
          !!Pinned Post!!{props.title}({props.date}) : {props.file}
        </a>
      </div>
    )
  }
}

export default PostItemPinned;