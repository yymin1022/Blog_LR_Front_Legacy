import React from 'react';
import {Helmet} from 'react-helmet';

const Metadata = ({data}) => {
    const title = data.title;
    const postID = data.postID !== undefined && `${data.postID}`;
    const postType = data.postType;

    return (
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            
            {image ? <meta property="og:image" content={require(`../Post/${postType}/${postID}/thumb.png`).default} /> : <meta property="og:image" content={"logo.png"}/>}
            <meta property="og:image:width" content={500} />
            <meta property="og:image:height" content={500} />
        </Helmet>
    );
};

export default Metadata;