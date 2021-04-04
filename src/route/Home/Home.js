import React, {Component} from 'react';
import {If, Else, Then} from 'react-if';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faThumbtack} from "@fortawesome/free-solid-svg-icons"

import PostItem from '/home/server/web/src/layout/PostItem';
import PostItemPinned from '/home/server/web/src/layout/PostItemPinned';

import postDB from '/home/server/web/src/posts/DB.json';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
    this.categoryID = "";
  }

  UNSAFE_componentWillMount() {
    const params = new URLSearchParams(this.props.location.search);
    this.categoryID = params.get('category');
  }

  render() {
    const categoryID = this.categoryID;

    return(
      <div align="center">
        <If condition={categoryID == null}>
          <Then>
            <div>
              <div style={{width: "85%", display: "flex", flexWrap: "wrap", justifyContent: "center"}} align="left">
                {
                  postDB.map(item => {
                    return(
                      <div style={{margin: "20px"}}>
                        <If condition={item.pinned}>
                          <Then>
                            <If condition={categoryID == null}>
                              <Then>
                                <PostItemPinned
                                  date = {item.date}
                                  tag = {item.tag}
                                  thumbnail = {item.thumbnail}
                                  title = {item.title}
                                  url = {item.url} />
                              </Then>
                              <Else>
                                <If condition={categoryID == item.tag}>
                                  <Then>
                                    <PostItemPinned
                                      date = {item.date}
                                      tag = {item.tag}
                                      thumbnail = {item.thumbnail}
                                      title = {item.title}
                                      url = {item.url} />
                                  </Then>
                                </If>
                              </Else>
                            </If>
                          </Then>
                        </If>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          <hr style={{width: "85%"}}/>
          <br/>
        </Then>
      </If>
        <div style={{width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
          {
            postDB.map(item => {
              return(
                <div style={{margin: "20px"}}>
                  <If condition={!item.pinned}>
                    <Then>
                      <If condition={categoryID == null}>
                        <Then>
                          <br/>
                          <PostItem
                            date = {item.date}
                            tag = {item.tag}
                            thumbnail = {item.thumbnail}
                            title = {item.title}
                            url = {item.url} />
                          <br/>
                        </Then>
                        <Else>
                          <If condition={categoryID == item.tag}>
                            <Then>
                              <br/>
                              <PostItem
                                date = {item.date}
                                tag = {item.tag}
                                thumbnail = {item.thumbnail}
                                title = {item.title}
                                url = {item.url} />
                              <br/>
                            </Then>
                          </If>
                        </Else>
                      </If>
                    </Then>
                  </If>
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