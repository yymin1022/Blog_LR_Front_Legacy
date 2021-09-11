import React from "react";

const PostRenderer = (postID, postType) => {
    return {
        img: ({src, width, ...props}) =>
            <>
                <img src={require(`../../postData/${postType}/${postID}/${src}`)} width={width} {...props} />
            </>
    }
}

export default PostRenderer;