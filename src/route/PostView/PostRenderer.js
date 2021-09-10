import React from "react";

const PostRenderer = (postID) => {
    return {
        img: ({src, width, ...props}) =>
            <img src={require("../../postData/200206-ubuntu-software-server-change/1_before.png").default} width={width} {...props} />
    }
}

export default PostRenderer;