import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faThumbtack} from "@fortawesome/free-solid-svg-icons"

import CaulyView from "../../Util/CaulyView";
import Metadata from "../../Util/Metadata.js";
import PostItem from "../../Layout/PostItem";

import blogDB from "../../Post/blog/DB.json";
import projectDB from "../../Post/project/DB.json";

import "./PostList.css";

const PostList = () => {
    let curPath = window.location.pathname;
    let pageType = (curPath == "/blog") ? "Blog" : "Projects";
    let postDB = (curPath == "/blog") ? blogDB : projectDB;
    let postType = (curPath == "/blog") ? "blog" : "project";

    useEffect(() => {
        return () => {
            window.scrollTo(0, 0);
        }
    }, []);

    return(
        <>
            <Metadata data={{title: `${pageType} - LR's IT Blog`}} />
            
            <div align="center" className="postListContainer">
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
                            if(item.pinned){
                                return(
                                    <PostItem
                                        pinned={item.pinned}
                                        postDate={item.postDate}
                                        postTag={item.postTag}
                                        postTitle={item.postTitle}
                                        postType={postType}
                                        postURL={item.postURL} />
                                );
                            }
                        })
                    }
                </div>

                <br/>

                <div className="PostAd" id="CaulyAdvertisement">
                    <CaulyView />
                </div>

                <hr className="seperator"/>
                <br/>

                <div className="postContainer">
                    {
                        postDB.map(item => {
                            if(!item.pinned){
                                return(
                                    <PostItem
                                        pinned={item.pinned}
                                        postDate={item.postDate}
                                        postTag={item.postTag}
                                        postTitle={item.postTitle}
                                        postType={postType}
                                        postURL={item.postURL} />
                                );
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default PostList;