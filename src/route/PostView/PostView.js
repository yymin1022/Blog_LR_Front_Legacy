import React, {useEffect, useState} from "react";
import {If, Else, Then} from "react-if";
import {Link, Redirect} from "react-router-dom";

import {DiscussionEmbed} from "disqus-react";
import ReactMarkdown from "react-markdown/with-html";

import CodeBlock from "./CodeBlock";
import postDB from "./posts/DB.json";

import "./PostView.css";

const PostView = (props) => {
    const [isNotFound, setIsNotFound] = useState(true);
    const [postData, setPostData] = useState("");
    const [postDate, setPostDate] = useState("");
    const [postID, setPostID] = useState("");
    const [postTag, setPostTag] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [postURL, setPostURL] = useState("");

    useEffect(() => {
        postDB.map(item => {
            if(item.postURL == props.match.params.postID){
                setIsNotFound(false);
                setPostDate(item.postDate);
                setPostID(item.postURL);
                setPostTag(item.postTag);
                setPostTitle(item.postTitle);
                setPostURL("https://blog-new.defcon.or.kr/postview/" + item.postURL);

                const MDFile = require("./postData/" + item.postURL + "/post.md").default;
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
    }, []);

    const disqusConfig = {
        url: postURL,
        identifier: postID,
        title: postTitle
    };
    const disqusShortname = "blog-new-defcon-or-kr";

    const BlockQuoteBlock = (props) => {
        return (
            <div className="quoteBlock" style={{}}>
                {props.children}
            </div>
        );
    }

    const InlineCodeBlock = (props) => {
        return(
            <span className="inlineCodeBlock">
                {props.value}
            </span>
        )
    }
    
    const TableCellBlock = (props) => {
        let style ={
            textAlign: props.align ? props.align : "center",
            padding: 5
        };
    
        if (props.isHeader){
            style.background = "#ffff00";
            style.border = "1px solid #cccccc";
            style.borderLeft = 0;
            style.borderRight = 0;
        }else{
            style.borderBottom = "1px solid #eeeeee";
        }
    
        return(
            <td style={style}>
                {props.children}
            </td>
        );
    }

    return(
        <div align="center">
            {/* <If condition={isNotFound}>
                <Then>
                    <Redirect to="/PostNotFound" />
                </Then>
            </If> */}

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
                    source={postData}

                    allowDangerousHtml={true}
                    escapeHtml={false}
                    skipHtml={false}
                    renderers={{
                        blockquote: BlockQuoteBlock,
                        code: CodeBlock,
                        inlineCode: InlineCodeBlock,
                        tableCell: TableCellBlock
                    }}/>
                </div>
            </div>

            <div className="PostTag">
                <p>{postTag}</p>
            </div>

            <div className="PostCommentContent">
                <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}/>
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