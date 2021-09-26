import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import ReactMarkdown from "react-markdown";
import RehypeRaw from "rehype-raw";
import RemarkGFM from "remark-gfm";

import PostRenderer from "../../Util/PostRenderer";
import Utterance from "../../Util/Utterance";

import blogDB from "../../Post/blog/DB.json";
import projectDB from "../../Post/project/DB.json";

import "./PostView.css";

const PostView = (props) => {
    const [postData, setPostData] = useState("");
    const [postDate, setPostDate] = useState("");
    const [postID, setPostID] = useState("");
    const [postTag, setPostTag] = useState([""]);
    const [postTitle, setPostTitle] = useState("");
    const [postType, setPostType] = useState("");

    useEffect(() => {
        setPostType(props.match.params.postType);
        let postDB = (props.match.params.postType == "blog") ? blogDB : projectDB;
    
        postDB.map(item => {
            if(item.postURL == props.match.params.postID){
                setMetaTags({title: `${item.postTitle} - LR's IT Blog`, imageUrl: require(`../../Post/${item.postType}/${item.postURL}/thumb.png`)});

                setPostDate(item.postDate);
                setPostID(item.postURL);
                setPostTag(item.postTag);
                setPostTitle(item.postTitle);

                const MDFile = require(`../../Post/${props.match.params.postType}/${item.postURL}/post.md`).default;
                fetch(MDFile).then(
                    MDResource => MDResource.text().then(
                        MDText => setPostData(MDText)
                    )
                );
            }
        });

        return () => {
            window.scrollTop = 0;
        }
    }, [postID]);

    return(
        <div align="center" className="PostContainer">
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
                {
                    postTag.map(item => {
                        return(
                            <p>{`#${item}`}</p>
                        )
                    })
                }
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

const setMetaTags = (
    {
        title = "LR's IT Blog",
        description = "대학생 1인개발자 LR의 IT블로그",
        imageUrl = "logo.png"
    }) => {
    document.querySelector('meta[property="og:title"]').setAttribute("content", `${title}`);
    document.querySelector('meta[property="og:description"]').setAttribute("content", description);
    document.querySelector('meta[property="og:image"]') .setAttribute("content", imageUrl);
    document.querySelector('meta[property="og:url"]') .setAttribute("content", window.location.href);
};

export default PostView;