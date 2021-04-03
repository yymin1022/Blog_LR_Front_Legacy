import React, {Component} from 'react';

import './PostItemPinned.css';

class PostItemPinned extends Component {
  constructor() {
    super();
    this.state = {};
  }

  UNSAFE_componentWillMount() {
    this.date1 = this.props.date1;
    this.tag1 = "";
    this.thumbnail1 = this.props.thumbnail1;
    this.title1 = this.props.title1;
    this.url1 = this.props.url1;

    this.date2 = this.props.date2;
    this.tag2 = "";
    this.thumbnail2 = this.props.thumbnail2;
    this.title2 = this.props.title2;
    this.url2 = this.props.url2;

    this.date3 = this.props.date3;
    this.tag3 = "";
    this.thumbnail3 = this.props.thumbnail3;
    this.title3 = this.props.title3;
    this.url3 = this.props.url3;

    switch(this.props.tag1){
      case "dev":
        this.tag1 = "#Development #Programming"
        break;
      case "os":
        this.tag1 = "#OS #Linux #Unix #Windows"
        break;
      case "synology":
        this.tag1 = "#Synology #XPEnology"
        break;
    }
    switch(this.props.tag2){
      case "dev":
        this.tag2 = "#Development #Programming"
        break;
      case "os":
        this.tag2 = "#OS #Linux #Unix #Windows"
        break;
      case "synology":
        this.tag2 = "#Synology #XPEnology"
        break;
    }
    switch(this.props.tag3){
      case "dev":
        this.tag3 = "#Development #Programming"
        break;
      case "os":
        this.tag3 = "#OS #Linux #Unix #Windows"
        break;
      case "synology":
        this.tag3 = "#Synology #XPEnology"
        break;
    }
  }

  render() {
    return(
      <div id="postPinned" align="center">
        <a href={this.url1}>
          <div id="postPinnedItem" align="left">
            <div id="postPinnedThumbnail">
              <img src={require("/home/server/web/src/posts/" + this.props.thumbnail1 + ".png").default} />
            </div>
            <div id="postPinnedInfo">
              <div id="postPinnedInfoTitle">
                <p>
                {this.title1}
                </p>
              </div>
              <div id="postPinnedInfoTag">
                <p>
                  {this.tag1}
                </p>
              </div>
              <div id="postPinnedInfoDate">
                <p>
                  {this.date1}
                </p>
              </div>
            </div>
          </div>
        </a>
        <br/>
        <a href={this.url2}>
          <div id="postPinnedItem" align="left">
            <div id="postPinnedThumbnail">
              <img src={require("/home/server/web/src/posts/" + this.props.thumbnail2 + ".png").default} />
            </div>
            <div id="postPinnedInfo">
              <div id="postPinnedInfoTitle">
                <p>
                {this.title2}
                </p>
              </div>
              <div id="postPinnedInfoTag">
                <p>
                  {this.tag2}
                </p>
              </div>
              <div id="postPinnedInfoDate">
                <p>
                  {this.date2}
                </p>
              </div>
            </div>
          </div>
        </a>
        <br/>
        <a href={this.url3}>
          <div id="postPinnedItem" align="left">
            <div id="postPinnedThumbnail">
              <img src={require("/home/server/web/src/posts/" + this.props.thumbnail3 + ".png").default} />
            </div>
            <div id="postPinnedInfo">
              <div id="postPinnedInfoTitle">
                <p>
                {this.title3}
                </p>
              </div>
              <div id="postPinnedInfoTag">
                <p>
                  {this.tag3}
                </p>
              </div>
              <div id="postPinnedInfoDate">
                <p>
                  {this.date3}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    )
  }
}

export default PostItemPinned;