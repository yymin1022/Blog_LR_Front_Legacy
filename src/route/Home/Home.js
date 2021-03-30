import React, {Component} from 'react';
import {If, Else, Then} from 'react-if';

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
      <div>
        {
          postDB.map(item => {
            const thumbnailPath = "/home/server/web/src/posts" + item.thumbnail + ".png";

            return(
              <div>
                <If condition={item.pinned}>
                  <Then>
                    <PostItemPinned
                      date = {item.date}
                      thumbnail = {thumbnailPath}
                      title = {item.title}
                      url = {item.url} />
                  </Then>
                <Else>
                  <Then>
                    <PostItem
                      date = {item.date}
                      thumbnail = {item.thumbnail}
                      title = {item.title}
                      url = {item.url} />
                  </Then>  
                </Else>
                </If>
                <br/>
              </div>
            );
          })
        }
      </div>
    )
  }
}

export default Home;