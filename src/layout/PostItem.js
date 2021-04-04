import React, {Component} from 'react';

import './PostItem.css';

class PostItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  UNSAFE_componentWillMount() {
    this.date = this.props.date;
    this.tag = "";
    this.thumbnail = this.props.thumbnail;
    this.title = this.props.title;
    this.url = this.props.url;

    switch(this.props.tag){
      case "dev":
        this.tag = "#Development #Programming"
        break;
      case "os":
        this.tag = "#OS #Linux #Unix #Windows"
        break;
      case "synology":
        this.tag = "#NAS #Synology #XPEnology"
        break;
    }
  }

  render() {
    return(
      <a href={this.url}>
        <div id="postItem" align="left">
          <div id="postThumbnail">
            <img src={require("/home/server/web/src/posts/" + this.thumbnail + ".png").default} />
          </div>
          <div id="postInfo">
            <div id="postInfoTitle">
              <p>
                {this.title}
              </p>
            </div>
            <div id="postInfoTag">
              <p>
                {this.tag}
              </p>
            </div>
            <div id="postInfoDate">
              <p>
                {this.date}
              </p>
            </div>
          </div>
        </div>
      </a>
    )
  }
}

export default PostItem;