import React from "react";

const PostRenderer = (postID) => {
    return {
        img: ({src, width, ...props}) => (
            <>
                {console.log(`../../postData/${postID}/${src}`)}
                <img src={require(`../../postData/${postID}/${src}`).default} width={width} {...props} />
            </>
        )
    }
}

export default PostRenderer;