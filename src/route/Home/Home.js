import React, {Component} from 'react';
import {If, Then} from 'react-if';

import PostItem from '/home/server/web/src/layout/PostItem';
import PostItemPinned from '/home/server/web/src/layout/PostItemPinned';

import postDB from '/home/server/web/src/posts/DB.json';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
    this.categoryID = "";
  }

  componentWillMount() {
    const params = new URLSearchParams(this.props.location.search);
    this.categoryID = params.get('category');D);
  }

  render() {
    alert(this.categoryID);
    
    return(
      <div align="center">
        <div>
          <div style={{width: "85%"}} align="left">
            {
              postDB.map(item => {
                return(
                  <div>
                    <If condition={item.pinned}>
                      <Then>
                        <a style={{textSize: "25px"}}>
                          # Pinned
                        </a>
                        <br/><br/>
                        <PostItemPinned
                          date1 = {item.date1}
                          tag1 = {item.tag1}
                          thumbnail1 = {item.thumbnail1}
                          title1 = {item.title1}
                          url1 = {item.url1}
                          
                          date2 = {item.date2}
                          tag2 = {item.tag2}
                          thumbnail2 = {item.thumbnail2}
                          title2 = {item.title2}
                          url2 = {item.url2}
                          
                          date3 = {item.date3}
                          tag3 = {item.tag3}
                          thumbnail3 = {item.thumbnail3}
                          title3 = {item.title3}
                          url3 = {item.url3} />
                          <br/><br/>
                      </Then>
                    </If>
                  </div>
                );
              })
            }
          </div>
          
        </div>
        <hr style={{width: "85%"}}/>
        <div style={{width: "100%"}}>
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
                  <br/><br/>
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