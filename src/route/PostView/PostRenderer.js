import React from "react";

const PostRenderer = (postID) => {
    console.log(postID);

    return {
        img: ({src, width, ...props}) =>
            <>
                {console.log(`img : ../../postData/${postID}/${src}`)}
                <img src={require(`../../postData/${postID}/thumb.png`).default} width={width} {...props} />
            </>,

        image: ({src, width, ...props}) =>
            <>
                {console.log(`image : ../../postData/${postID}/${src}`)}
                <img src={require(`../../postData/${postID}/${src}`).default} width={width} {...props} />
            </>,

        Image: ({src, width, ...props}) =>
            <>
                {console.log(`Image : ../../postData/${postID}/${src}`)}
                <img src={require(`../../postData/${postID}/${src}`).default} width={width} {...props} />
            </>,
    }
}

export default PostRenderer;