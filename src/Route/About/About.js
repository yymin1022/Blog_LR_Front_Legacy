import React, {useEffect, useState} from "react";
import {Helmet} from 'react-helmet';

import ReactMarkdown from "react-markdown";
import RehypeRaw from "rehype-raw";
import RemarkGFM from "remark-gfm";

import MDFile from "../../Post/About/about.md";
import PostRenderer from "../../Util/PostRenderer";
import Utterance from "../../Util/Utterance";

import "./About.css";

const About = () => {
    const [aboutData, setAboutData] = useState("");

    useEffect(() => {
        fetch(MDFile).then(
            MDResource => MDResource.text().then(
                MDText => setAboutData(MDText)
            )
        );

        return () => {
            window.scrollTo(0, 0);
        }
    }, []);

    return(
        <>
            <Helmet>
                <title>About - LR's IT Blog</title>
                <meta name="description" property="og:description" content="1인개발자 LR의 IT블로그" />
                <meta name="image" property="og:image" content="logo.png" />
                <meta name="url" property="og:url" content={window.location.href} />
            </Helmet>

            <div align="center">
                <div className="AboutContent">
                    <div className="markdown-body-about">
                        <ReactMarkdown
                            children={aboutData}
                            components={PostRenderer("about", "About")}
                            rehypePlugins={[RehypeRaw]}
                            remarkPlugins={[RemarkGFM]} />
                    </div>
                </div>

                <div className="divAboutComment">
                    <Utterance />
                </div>
            </div>
        </>
    )
}

export default About;