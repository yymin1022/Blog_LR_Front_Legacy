import React from "react";

const PostItem = (props) => {
    return(
        <div className="postItem" id={props.postURL}>
            <p>{props.postTitle}</p>
        </div>
    )
}

export default PostItem;