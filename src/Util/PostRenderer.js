import React from "react"; 
import styled from "styled-components";
import {Link} from "react-router-dom";

import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/prism'

const PostRenderer = (postID, postType) => {
    return {
        a: ({children, ...props}) =>{
            return(
                <Link {...props} target="_sub">
                    <AContainer>
                        <p className="postLinkTitle">children</p>
                        <p className="postLinkURL">{props.href}</p>
                    </AContainer>
                </Link>
            )
        },
            // <A target="_sub" {...props}>{children}</A>,

        code: ({inline, className, children, ...props}) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match 
                ? <SyntaxHighlighter style={darcula} language={match[1]} children={String(children).replace(/\n$/, '')} {...props}/>
                : <code className={className} {...props}/>;
        },

        img: ({src, width, ...props}) =>
            <img src={require(`../Post/${postType}/${postID}/${src}`)} width={width} {...props} />,

        strong: ({children, ...props}) =>
            <Strong {...props}>{children}</Strong>,
        
        ul: ({children, ...props}) =>
            <Ul {...props}>{children}</Ul>,
    }
}

export default PostRenderer;

const AContainer = styled.div`
    display: flex;
    flex-direction: column;

    .postLinkTitle{
        color: #164EAB;
        font-weight: 900;
        text-decoration: none;
        transition: color .3s;

        &:hover {
            color: #0b2b5e;
        }
    }
`

const Strong = styled.strong`
    background-color: #EEEEEE;
    color: #164EAB;
    font-weight: 500;
    padding: 4px;
`

const Ul = styled.ul`
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    width: 500px;

    @media screen and (max-width: 1400px){
        width: auto;
    }
`