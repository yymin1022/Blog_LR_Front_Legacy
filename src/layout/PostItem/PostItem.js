import React from "react";

const PostItem = (props) => {
    let isPinned = props.pinned;
    let postDate = props.postDate;
    let postTag = props.postTag;
    let postTitle = props.postTitle;
    let postURL = props.postURL;

    if(isPinned){
        return(
            <div className="postItemPinned" id={postURL}>
                <p>!!Pinned!! {postTitle}</p>
            </div>
        )
    }else{
        return(
            <div className="postItem" id={postURL}>
                <p>{postTitle}</p>
            </div>
        )
    }
}

export default PostItem;