import React, {useEffect, useState} from "react";
import {If, Then} from "react-if";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faThumbtack} from "@fortawesome/free-solid-svg-icons"

import postDB from "../../postData/DB.json";

import "./Blog.css";

const Blog = (props) => {
    const [categoryID, setCategoryID] = useState("all");

    useEffect(() => {
        if(props.location.state){
            setCategoryID(props.location.state.categoryID);
        }

        // return () => {
        //     window.location.reload();
        // }
    }, [categoryID]);

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
                            <If condition={item.pinned}>
                                <Then>
                                    <div className="postItemPinned">
                                        <p>item.postTitle</p>
                                    </div>
                                </Then>
                            </If>
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
                        return(
                            <div className="postItem">
                                <p>item.postTitle</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Blog;