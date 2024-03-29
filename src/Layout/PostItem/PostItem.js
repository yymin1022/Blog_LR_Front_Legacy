import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import "./PostItem.css";

const PostItem = (props) => {
    const [postThumbnail, setpostThumbnail] = useState('');

    let isPinned = props.pinned;
    let postDate = props.postDate;
    let postTag = props.postTag;
    let postTitle = props.postTitle;
    let postType = props.postType;
    let postURL = props.postURL;

    useEffect(() => {
        let postThumbnailObject;
        if(postType == "solving"){
            (postTag[0] == "BOJ") ?
                postThumbnailObject = require(`../../Post/solving/thumb_boj.png`) :
                postThumbnailObject = require(`../../Post/solving/thumb_programmers.png`);
        }else{
            postThumbnailObject = require(`../../Post/${postType}/${postURL}/thumb.png`);
        }
        setpostThumbnail(postThumbnailObject);
    }, [PostItem]);

    if(isPinned){
        return(
            <>
                <Link to={`/postview/${postType}/${postURL}`} style={{textDecoration: "none"}}>
                    <div className="postPinnedItem" id={postURL}>
                        <div className="postPinnedItemImage">
                            <img src={postThumbnail} />
                        </div>
                        <div className="postPinnedItemText">
                            <p className="pPostTitle">{postTitle}</p>
                            <p className="pPostDate">{postDate}</p>
                            <p className="pPostTag">{`#${postTag[0]}`}</p>
                        </div>
                    </div>
                </Link>
            </>
        )
    }else{
        return(
            <>
                <Link to={`/postview/${postType}/${postURL}`} style={{textDecoration: 'none'}}>
                    <div className="postItem" id={postURL}>
                        <div className="postItemImage">
                            <img src={postThumbnail} />
                        </div>
                        <div className="postItemText">
                            <p className="pPostTitle">{postTitle}</p>
                            <p className="pPostDate">{postDate}</p>
                            <p className="pPostTag">{`#${postTag[0]}`}</p>
                        </div>
                    </div>
                </Link>
            </>
        )
    }
}

export default PostItem;