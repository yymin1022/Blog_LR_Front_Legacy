import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import ReactMarkdown from "react-markdown";
import RehypeRaw from "rehype-raw";
import RemarkGFM from "remark-gfm";

import Metadata from "../../Util/Metadata.js";
import PostRenderer from "../../Util/PostRenderer";
import Utterance from "../../Util/Utterance";

import blogDB from "../../Post/blog/DB.json";
import projectDB from "../../Post/project/DB.json";
import solvingDB from "../../Post/solving/DB.json";

import "./PostView.css";

const PostView = (props) => {
    const [postData, setPostData] = useState("");
    const [postDate, setPostDate] = useState("");
    const [postID, setPostID] = useState("");
    const [postTag, setPostTag] = useState([""]);
    const [postTitle, setPostTitle] = useState("");
    const [postType, setPostType] = useState("");

    useEffect(() => {
        let curPath = window.location.pathname;
        let postDB = (curPath == "/blog") ? blogDB : (curPath == "/project") ? projectDB : solvingDB;
        
        setPostType(props.match.params.postType);
    
        postDB.map(item => {
            if(item.postURL == props.match.params.postID){
                console.log(item.postURL);
                console.log(item.postTag);
                console.log(props.match.params.postType);

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
            window.scrollTo(0, 0);
        }
    }, [postID]);

    return(
        <>
        <Metadata data={{
            title: `${postTitle} - LR's IT Blog`,
            postID: postID,
            postType: postType}} />
        
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
        </>
    )
}

export default PostView;