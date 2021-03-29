import React, {Component} from 'react';

class PostItem extends Component {
  constructor() {
    super();
    this.state = {};
  }  

  render() {
    return(
      <div>
        <div>

        </div>
        <div>
          
        </div>
        <a href={this.props.url}>
          {this.props.title}({this.props.date}) : {this.props.file}
        </a>
      </div>
    )
  }
}

export default PostItem;