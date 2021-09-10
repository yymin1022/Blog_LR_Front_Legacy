import React from "react";

import testImg from "../../postData/210202-synology-docker-vscode-install/0_vscode_usage.png";

const PostRenderer = (postID) => {
    return {
        img: ({src, width, ...props}) =>
            <>
                <img src={require(`../../postData/${postID}/${src}`)} width={width} {...props} />
            </>
    }
}

export default PostRenderer;