import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import PostRenderer from "./PostRenderer";
import ReactMarkdown from "react-markdown/with-html";
import RehypeRaw from "rehype-raw";
import RemarkGFM from "remark-gfm";

import postDB from "../../postData/DB.json";

import "./PostView.css";

const PostView = (props) => {
    const [postData, setPostData] = useState("");
    const [postDate, setPostDate] = useState("");
    const [postID, setPostID] = useState("");
    const [postTag, setPostTag] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [postURL, setPostURL] = useState("");

    useEffect(() => {
        postDB.map(item => {
            if(item.postURL == props.match.params.postID){
                setPostDate(item.postDate);
                setPostID(item.postURL);
                setPostTag(item.postTag);
                setPostTitle(item.postTitle);
                setPostURL("https://blog-new.defcon.or.kr/postview/" + item.postURL);

                const MDFile = require("../../postData/" + item.postURL + "/post.md").default;
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
                    {
                        console.log(PostRenderer(postID)),
                        console.log(postID)
                    }

                    <ReactMarkdown
                        allowDangerousHtml={true}
                        children={postData}
                        components={PostRenderer(postID)}
                        rehypePlugins={[RehypeRaw]}
                        remarkPlugins={[RemarkGFM]}
                        skipHtml={false} />
                </div>
            </div>

            <div className="PostTag">
                <p>{postTag}</p>
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