import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./PostItem.css";

class PostItem extends Component {
    constructor() {
        super();
        this.state = {};
    }

    UNSAFE_componentWillMount() {
        this.postDate = this.props.postDate;
        this.postTag = "";
        this.postThumbnail = this.props.postThumbnail;
        this.postTitle = this.props.postTitle;
        this.postURL = this.props.postURL;

        switch(this.props.postTag){
            case "dev":
                this.postTag = "#Development #Programming"
                break;
            case "os":
                this.postTag = "#OS #Linux #Unix #Windows"
                break;
            case "synology":
                this.postTag = "#NAS #Synology #XPEnology"
                break;
        }
    }

    render() {
        return(
            <Link to={"/postview/" + this.postURL}>
                <div id="postItem" align="left">
                    <div id="postThumbnail">
                        <img src={process.env.PUBLIC_URL + "/PostThumbnails/" + this.postThumbnail + ".png"} />
                    </div>

                    <div id="postInfo">
                        <div id="postInfoTitle">
                            <p>
                            {this.postTitle}
                            </p>
                        </div>

                        <div id="postInfoTag">
                            <p>
                              {this.postTag}
                            </p>
                        </div>
                        
                        <div id="postInfoDate">
                            <p>
                              {this.postDate}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default PostItem;