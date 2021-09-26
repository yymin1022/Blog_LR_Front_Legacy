import React, {useEffect, useState} from "react";
import {Helmet} from 'react-helmet';

import ReactMarkdown from "react-markdown";
import RehypeRaw from "rehype-raw";
import RemarkGFM from "remark-gfm";

import MDFile from "../../Post/About/about.md";
import Metadata from "../../Util/Metadata.js";
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
            <Metadata data={{title: "About - LR's IT Blog"}} />

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