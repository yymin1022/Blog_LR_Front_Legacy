import React from "react"; 
import styled from "styled-components";

import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/prism'

const PostRenderer = (postID, postType) => {
    return {
        a: ({children, ...props}) =>
            <A {...props}>{children}</A>,

        code: ({inline, className, children, ...props}) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match 
                ? <SyntaxHighlighter style={darcula} language={match[1]} children={String(children).replace(/\n$/, '')} {...props}/>
                : <code className={className} {...props}/>;
        },

        img: ({src, width, ...props}) =>
            <img src={require(`../../postData/${postType}/${postID}/${src}`)} width={width} {...props} />,

        strong: ({children, ...props}) =>
            <Strong {...props}>{children}</Strong>,
    }
}

export default PostRenderer;

const A = styled.a`
    color: #164EAB;
    text-decoration: none;
    transition: color .3s;

    &:hover {
        color: #0b2b5e;
    }
`

const Strong = styled.strong`
    color: #164EAB;
`