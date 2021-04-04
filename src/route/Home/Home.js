import React, {Component} from 'react';
import {If, Else, Then} from 'react-if';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faThumbtack} from "@fortawesome/free-solid-svg-icons"

import PostItem from '/home/server/web/src/layout/PostItem';
import PostItemPinned from '/home/server/web/src/layout/PostItemPinned';

import postDB from '/home/server/web/src/posts/DB.json';

import "./Home.css";

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
              <div align="left" className="seperator">
                <FontAwesomeIcon icon={faThumbtack} color="#606060" size="lg"/>
                <a style={{color: "#606060", marginLeft: "5px", textSize: "25px"}}>
                  Pinned
                </a>
                <br/>
              </div>
              
              <div style={{width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {
                  postDB.map(item => {
                    return(
                      <div>
                        <If condition={item.pinned}>
                          <Then>
                            <If condition={categoryID == null}>
                              <Then>
                                <div style={{margin: "20px"}}>
                                  <PostItemPinned
                                    date = {item.date}
                                    tag = {item.tag}
                                    thumbnail = {item.thumbnail}
                                    title = {item.title}
                                    url = {item.url} />
                                </div>
                              </Then>
                              <Else>
                                <If condition={categoryID == item.tag}>
                                  <Then>
                                    <div style={{margin: "20px"}}>
                                      <PostItemPinned
                                        date = {item.date}
                                        tag = {item.tag}
                                        thumbnail = {item.thumbnail}
                                        title = {item.title}
                                        url = {item.url} />
                                    </div>
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
            <br/>
            <hr className="seperator"/>
            <br/>
          </Then>
        </If>
        <div style={{width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
          {
            postDB.map(item => {
              return(
                <div>
                  <If condition={!item.pinned}>
                    <Then>
                      <If condition={categoryID == null}>
                        <Then>
                          <div style={{margin: "20px"}}>
                            <PostItem
                              date = {item.date}
                              tag = {item.tag}
                              thumbnail = {item.thumbnail}
                              title = {item.title}
                              url = {item.url} />
                          </div>
                        </Then>
                        <Else>
                          <If condition={categoryID == item.tag}>
                            <Then>
                              <div style={{margin: "20px"}}>
                                <PostItem
                                  date = {item.date}
                                  tag = {item.tag}
                                  thumbnail = {item.thumbnail}
                                  title = {item.title}
                                  url = {item.url} />
                              </div>
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