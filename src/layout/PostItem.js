import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import "./PostItem.css";

const PostItem = (props) => {
    const [postDate, setPostDate] = useState("");
    const [postTag, setPostTag] = useState("");
    const [postThumbnail, setPostThumbnail] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [postURL, setPostURL] = useState("");

    useEffect(() => {
        console.log(props.postTitle);

        setPostDate(props.postDate);
        setPostThumbnail(props.postThumbnail);
        setPostTitle(props.postTitle);
        setPostURL(props.postURL);

        switch(props.postTag){
            case "dev":
                setPostTag("#Development #Programming");
                break;
            case "os":
                setPostTag("#OS #Linux #Unix #Windows");
                break;
            case "synology":
                setPostTag("#NAS #Synology #XPEnology");
                break;
        }

        return () => {
            
        }
    }, []);

    return(
        <Link to={"/postview/" + postURL}>
            <div id="postItem" align="left">
                <div id="postThumbnail">
                    <img src={process.env.PUBLIC_URL + "/PostThumbnails/" + postThumbnail + ".png"} />
                </div>

                <div id="postInfo">
                    <div id="postInfoTitle">
                        <p>
                        {postTitle}
                        </p>
                    </div>

                    <div id="postInfoTag">
                        <p>
                            {postTag}
                        </p>
                    </div>
                    
                    <div id="postInfoDate">
                        <p>
                            {postDate}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PostItem;