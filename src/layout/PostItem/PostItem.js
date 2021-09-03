import React from "react";
import {Link} from "react-router-dom";

import "./PostItem.css";

const StyledLink = () => {
    return(
        styled(Link)`
            text-decoration: none;

            &:focus, &:hover, &:visited, &:link, &:active {
                text-decoration: none;
            }`
    )
}

const PostItem = (props) => {
    let isPinned = props.pinned;
    let postDate = props.postDate;
    let postTag = props.postTag;
    let postTitle = props.postTitle;
    let postURL = props.postURL;

    if(isPinned){
        return(
            <>
                <StyledLink to={"/postview/" + postURL} style={{textDecoration: "none"}}>
                    <div className="postPinnedItem" id={postURL}>
                        <div className="postPinnedItemImage">

                        </div>
                        <div className="postPinnedItemText">
                            <p className="pPostTitle">{postTitle}</p>
                            <p className="pPostDate">{postDate}</p>
                            <p className="pPostTag">{postTag}</p>
                        </div>
                    </div>
                </StyledLink>
            </>
        )
    }else{
        return(
            <>
                <StyledLink to={"/postview/" + postURL} style={{textDecoration: 'none'}}>
                    <div className="postItem" id={postURL}>
                        <div className="postItemImage">

                        </div>
                        <div className="postItemText">
                            <p className="pPostTitle">{postTitle}</p>
                            <p className="pPostDate">{postDate}</p>
                            <p className="pPostTag">{postTag}</p>
                        </div>
                    </div>
                </StyledLink>
            </>
        )
    }
}

export default PostItem;