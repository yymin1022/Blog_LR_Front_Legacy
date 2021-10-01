import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faThumbtack} from "@fortawesome/free-solid-svg-icons"

import CaulyView from "../../Util/CaulyView";
import Metadata from "../../Util/Metadata.js";
import PostItem from "../../Layout/PostItem";

import blogDB from "../../Post/blog/DB.json";
import projectDB from "../../Post/project/DB.json";
import solvingDB from "../../Post/solving/DB.json";

import "./PostList.css";

/********
Blog : Pinned 4개. 
Projects : Pinned 4개.
Problem Solving : Pinned 없음. Title에 문제이름, Date에 문제번호 기록 ex) BOJ 1022 / Programmers 1022
*********/

const PostList = () => {
    let curPath = window.location.pathname;
    let pageType = (curPath == "/blog") ? "Blog" : (curPath == "/project") ? "Projects" : "Solving";
    let postDB = (curPath == "/blog") ? blogDB : (curPath == "/project") ? projectDB : solvingDB;
    let postType = (curPath == "/blog") ? "blog" :  (curPath == "/project") ? "project" : "solving";

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
                    {(postType != "solving") ?  
                        <FontAwesomeIcon icon={faThumbtack} color="#606060" size="lg"/>
                        : ""
                    }
                    <a style={{color: "#606060", marginLeft: "5px", textSize: " 25px"}}>
                        {(postType == "solving") ? "BOJ" :  "Pinned"}
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