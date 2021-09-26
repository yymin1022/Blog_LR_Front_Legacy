import React from 'react';
import {Helmet} from 'react-helmet';

const Metadata = ({data}) => {
    const title = data.title;
    const description = data.description;
    const image = data.image !== undefined && `${data.image}`;
    const width = data.image && (data.width || 500);
    const height = data.image && (data.height || 500);

    return (
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content="대학생 1인개발자 LR의 IT블로그" />

            {image ? <meta property="og:image" content={image} /> : <meta property="og:image" content={image}/>}
            {width ? <meta property="og:image:width" content={width} /> : null}
            {height ? <meta property="og:image:height" content={height} /> : null}
        </Helmet>
    );
};

export default Metadata;