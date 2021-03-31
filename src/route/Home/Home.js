import React, {Component} from 'react';
import {If, Then} from 'react-if';

import PostItem from '/home/server/web/src/layout/PostItem';
import PostItemPinned from '/home/server/web/src/layout/PostItemPinned';

import postDB from '/home/server/web/src/posts/DB.json';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }  

  render() {
    return(
      <div align="center">
        <div>
          <div align="left">
            <a style={{marginLeft: "10%", textSize: "25px"}}>
              # Pinned
            </a>
          </div>

          {
            postDB.map(item => {
              return(
                <div>
                  <br/>
                  <If condition={item.pinned}>
                    <Then>
                      <PostItemPinned
                        date = {item.date}
                        tag = {item.tag}
                        thumbnail = {item.thumbnail}
                        title = {item.title}
                        url = {item.url} />
                    </Then>
                  </If>
                </div>
              );
            })
          }
        </div>
        <hr style={{width: "85%"}}/>
        <div>
          {
            postDB.map(item => {
              return(
                <div>
                  <If condition={!item.pinned}>
                  <Then>
                      <PostItem
                        date = {item.date}
                        tag = {item.tag}
                        thumbnail = {item.thumbnail}
                        title = {item.title}
                        url = {item.url} />
                    </Then>
                  </If>
                  <br/>
                </div>
              );
            })
          }
        </div>
      </div>
    )
  }
}

export default Home;