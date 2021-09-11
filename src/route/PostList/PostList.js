import React from "react";
import {If, Then} from "react-if";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faThumbtack} from "@fortawesome/free-solid-svg-icons"

import PostItem from "../../layout/PostItem";

import blogDB from "../../postData/DB.json";
import projectDB from "../../postData/DB.json";

import "./PostList.css";

const PostList = (props) => {
    let postDB;
    let postType = props.location.state.postType;

    if(postType === "blog"){
        postDB = blogDB;
    }else if(postType === "project"){
        postDB = projectDB;
    }

    return(
        <div align="center">
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
                            <>
                                <If condition={item.pinned}>
                                    <Then>
                                        <PostItem
                                            pinned={item.pinned}
                                            postDate={item.postDate}
                                            postTag={item.postTag}
                                            postTitle={item.postTitle}
                                            postURL={item.postURL} />
                                    </Then>
                                </If>
                            </>
                        );
                    })
                }
            </div>

            <br/>
            <hr className="seperator"/>
            <br/>

            <div className="postContainer">
                {
                    postDB.map(item => {
                        if(!item.pinned){
                            return(
                                <>
                                    <PostItem
                                        pinned={item.pinned}
                                        postDate={item.postDate}
                                        postTag={item.postTag}
                                        postTitle={item.postTitle}
                                        postURL={item.postURL} />
                                </>
                            );
                        }
                    })
                }
            </div>
        </div>
    )
}

export default PostList;