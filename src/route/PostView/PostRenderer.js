import React from "react";

import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";

const PostRenderer = (postID, postType) => {
    return {
        code: ({inline, className, children, ...props}) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match 
                ? <SyntaxHighlighter style={okaidia} language={match[1]} children={String(children).replace(/\n$/, '')} {...props}/>
                : <code className={className} {...props}/>;
        },

        img: ({src, width, ...props}) => {
            <>
                <img src={require(`../../postData/${postType}/${postID}/${src}`)} width={width} {...props} />
            </>
        }
    }
}

export default PostRenderer;