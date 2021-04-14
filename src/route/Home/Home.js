import React, {Component} from "react";
import {If, Else, Then} from "react-if";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faThumbtack} from "@fortawesome/free-solid-svg-icons"

import PostItem from "/home/server/web/src/layout/PostItem";
import PostItemPinned from "/home/server/web/src/layout/PostItemPinned";

import postDB from "/home/server/web/src/posts/DB.json";

import "./Home.css";

class Home extends Component {
  constructor(props) {
    super();
    this.state = {};
    this.categoryID = "all";
  }

  UNSAFE_componentWillMount() {
    if(this.props.location.state){
      this.categoryID = this.props.location.state.categoryID;
    }
  }

  componentDidUpdate() {
    window.location.reload();
  }

  render() {
    const categoryID = this.categoryID;

    return(
      <div align="center">
        <If condition={categoryID == "all"}>
          <Then>
            <>
              <div align="left" className="postPinnedTitle">
                <FontAwesomeIcon icon={faThumbtack} color="#606060" size="lg"/>
                <a style={{color: "#606060", marginLeft: "5px", textSize: "25px"}}>
                  Pinned
                </a>
                <br/>
              </div>
              
              <div className="postPinnedContainer">
                {
                  postDB.map(item => {
                    return(
                      <div key={item.postThumbnail}>
                        <If condition={item.pinned}>
                          <Then>
                            <If condition={categoryID == "all"}>
                              <Then>
                                <div className="postItemPinned">
                                  <PostItemPinned
                                    postDate = {item.postDate}
                                    postTag = {item.postTag}
                                    postThumbnail = {item.postThumbnail}
                                    postTitle = {item.postTitle}
                                    postURL = {item.postURL} />
                                </div>
                              </Then>
                              <Else>
                                <If condition={categoryID == item.postTag}>
                                  <Then>
                                    <div className="postItemPinned">
                                      <PostItemPinned
                                        postDate = {item.postDate}
                                        postTag = {item.postTag}
                                        postThumbnail = {item.postThumbnail}
                                        postTitle = {item.postTitle}
                                        postURL = {item.postURL} />
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
            </>
            <br/>
            <hr className="seperator"/>
            <br/>
          </Then>
        </If>
        <div className="postContainer">
          {
            postDB.map(item => {
              return(
                <div key={item.postURL}>
                  <If condition={!item.pinned}>
                    {console.log(item.pinned + " / " + item.postTitle)}
                    <Then>
                      <If condition={categoryID == "all"}>
                        <Then>
                          <div className="postItem">
                            <PostItem
                              postDate = {item.postDate}
                              postTag = {item.postTag}
                              postThumbnail = {item.postThumbnail}
                              postTitle = {item.postTitle}
                              postURL = {item.postURL} />
                          </div>
                        </Then>
                        <Else>
                          <If condition={categoryID == item.postTag}>
                            <Then>
                              <div className="postItem">
                                <PostItem
                                  postDate = {item.postDate}
                                  postTag = {item.postTag}
                                  postThumbnail = {item.postThumbnail}
                                  postTitle = {item.postTitle}
                                  postURL = {item.postURL} />
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