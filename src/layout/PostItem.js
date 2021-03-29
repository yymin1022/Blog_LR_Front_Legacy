import React, {Component} from 'react';

class PostItem extends Component {
  constructor() {
    super();
    this.state = {};
  }  

  render() {
    return(
      <div>
        <a href={props.url}>
          {props.title}({props.date}) : {props.file}
        </a>
      </div>
    )
  }
}

export default PostItem;