import React from "react";

const PostRenderer = (postID) => {
    return {
        img: ({src, width, ...props}) =>
            <>
                {
                    console.log(require(`../../postData/${postID}/${src}`).default),
                    console.log(require("../../postData/210202-synology-docker-vscode-install/0_vscode_usage.png").default)
                }
                <img src={require(`../../postData/${postID}/${src}`).default} width={width} {...props} />
            </>
    }
}

export default PostRenderer;