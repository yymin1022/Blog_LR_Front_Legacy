import React from 'react';
import {Helmet} from 'react-helmet';

const Metadata = ({data}) => {
    const title = data.title;
    const image = data.image !== undefined && `${data.image}`;''

    return (
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content="대학생 1인개발자 LR의 IT블로그" />

            {image ? <meta property="og:image" content={image} /> : <meta property="og:image" content={"logo.png"}/>}
            <meta property="og:image:width" content={500} />
            <meta property="og:image:height" content={500} />
        </Helmet>
    );
};

export default Metadata;