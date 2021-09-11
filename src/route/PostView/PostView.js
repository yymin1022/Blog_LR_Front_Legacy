import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import PostRenderer from "./PostRenderer";
import ReactMarkdown from "react-markdown";
import RehypeRaw from "rehype-raw";
import RemarkGFM from "remark-gfm";

import blogDB from "../../postData/blog/DB.json";
import projectDB from "../../postData/project/DB.json";
import Utterance from "./Utterance";

import "./PostView.css";

const PostView = (props) => {
    const [postData, setPostData] = useState("");
    const [postDate, setPostDate] = useState("");
    const [postID, setPostID] = useState("");
    const [postTag, setPostTag] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [postType, setPostType] = useState("");
    const [postURL, setPostURL] = useState("");

    useEffect(() => {
        setPostType(props.match.params.postType);
        let postDB = (props.match.params.postType == "blog") ? blogDB : projectDB;
    
        postDB.map(item => {
            if(item.postURL == props.match.params.postID){
                setPostDate(item.postDate);
                setPostID(item.postURL);
                setPostTag(item.postTag);
                setPostTitle(item.postTitle);
                setPostURL(`https://blog-new.defcon.or.kr/postview/${props.match.params.postType}/${item.postURL}`);

                const MDFile = require(`../../postData/${props.match.params.postType}/${item.postURL}/post.md`).default;
                fetch(MDFile).then(
                    MDResource => MDResource.text().then(
                        MDText => setPostData(MDText)
                    )
                );
            }
        });
    }, [postID]);

    return(
        <div align="center">
            <div className="PostTitle">
                <h2>{postTitle}</h2>

                <div className="PostAuthorDate">
                    <p>written by LR</p>
                    <p>|</p>
                    <p>{postDate}</p>
                </div>
            </div>

            <hr className="PostSeperator"/>

            <div className="PostViewContent">
                <div className="markdown-body">
                    <ReactMarkdown
                        children={postData}
                        components={PostRenderer(postID, postType)}
                        rehypePlugins={[RehypeRaw]}
                        remarkPlugins={[RemarkGFM]} />
                </div>
            </div>

            <div className="PostTag">
                <p>{postTag}</p>
            </div>

            <div className="divComment">
                <Utterance />
            </div>

            <div className="PostFooter">
                <Link to={"/"}>
                    <h3 className="PostFooterNav">Home</h3>
                </Link>
                <Link to={"/about"}>
                    <h3 className="PostFooterNav">About</h3>
                </Link>
            </div>
        </div>
    )
}

export default PostView;