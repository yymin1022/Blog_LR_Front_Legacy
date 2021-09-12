import React from "react"; 
import styled from "styled-components";

import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/prism'

const PostRenderer = (postID, postType) => {
    return {
        code: ({inline, className, children, ...props}) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match 
                ? <SyntaxHighlighter style={darcula} language={match[1]} children={String(children).replace(/\n$/, '')} {...props}/>
                : <code className={className} {...props}/>;
        },

        img: ({src, width, ...props}) =>
            <img src={require(`../../postData/${postType}/${postID}/${src}`)} width={width} {...props} />,

        strong: ({children, ...props}) =>
            <post_strong {...props}>{children}</post_strong>,
    }
}

export default PostRenderer;

const post_strong = styled.strong`
    color: #164EAB
}`