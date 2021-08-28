import React from "react";

import "./PostItem.css";

const PostItem = (props) => {
    let isPinned = props.pinned;
    let postDate = props.postDate;
    let postTag = props.postTag;
    let postTitle = props.postTitle;
    let postURL = props.postURL;

    if(isPinned){
        return(
            <div className="postPinnedItem" id={postURL}>
                <div className="postPinnedItemImage">

                </div>
                <div className="postPinedItemText">
                    <p className="pPostTitle">{postTitle}</p>
                    <p className="pPostDate">{postDate}</p>
                    <p className="pPostTag">{postTag}</p>
                </div>
            </div>
        )
    }else{
        return(
            <div className="postItem" id={postURL}>
                <div className="postItemImage">

                </div>
                <div className="postItemText">
                    <p className="pPostTitle">{postTitle}</p>
                    <p className="pPostDate">{postDate}</p>
                    <p className="pPostTag">{postTag}</p>
                </div>
            </div>
        )
    }
}

export default PostItem;