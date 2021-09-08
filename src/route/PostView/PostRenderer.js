import React from "react";

const PostRenderer = (postID) => {
    console.log(src);

    return {
        img: ({src, width, ...props}) =>
            <>
                {console.log(`img : ../../postData/${postID}/${src}`)}
                <img src={require(`../../postData/${postID}/${src}`).default} width={width} {...props} />
            </>
    }
}

export default PostRenderer;