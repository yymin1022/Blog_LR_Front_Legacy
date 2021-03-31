import React, {Component} from 'react';

import './PostItemPinned.css';

class PostItemPinned extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <div style={{display: flex}}>
        <a href={this.props.url1}>
          <div id="postItem" align="left">
            <div id="postThumbnail">
              <img src={require("/home/server/web/src/posts/" + this.props.thumbnail1 + ".png").default} />
            </div>
            <div id="postInfo">
              <div id="postInfoTitle">
                <p>
                !!Pinned!! {this.props.title1}
                </p>
              </div>
              <div id="postInfoTag">
                <p>
                  #{this.props.tag1}
                </p>
              </div>
              <div id="postInfoDate">
                <p>
                  {this.props.date1}
                </p>
              </div>
            </div>
          </div>
        </a>
        <br/>
        <a href={this.props.url2}>
          <div id="postItem" align="left">
            <div id="postThumbnail">
              <img src={require("/home/server/web/src/posts/" + this.props.thumbnail2 + ".png").default} />
            </div>
            <div id="postInfo">
              <div id="postInfoTitle">
                <p>
                !!Pinned!! {this.props.title2}
                </p>
              </div>
              <div id="postInfoTag">
                <p>
                  #{this.props.tag2}
                </p>
              </div>
              <div id="postInfoDate">
                <p>
                  {this.props.date2}
                </p>
              </div>
            </div>
          </div>
        </a>
        <br/>
        <a href={this.props.url3}>
          <div id="postItem" align="left">
            <div id="postThumbnail">
              <img src={require("/home/server/web/src/posts/" + this.props.thumbnail3 + ".png").default} />
            </div>
            <div id="postInfo">
              <div id="postInfoTitle">
                <p>
                !!Pinned!! {this.props.title3}
                </p>
              </div>
              <div id="postInfoTag">
                <p>
                  #{this.props.tag3}
                </p>
              </div>
              <div id="postInfoDate">
                <p>
                  {this.props.date3}
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