import React from "react";

const PostRenderer = (postID) => {
    return {
        img: ({src, width, ...props}) =>
            <>
                {
                    console.log(require(`../../postData/${postID}/${src}`))
                }
                <img src={require(`../../postData/${postID}/${src}`)} width={width} {...props} />
            </>
    }
}

export default PostRenderer;