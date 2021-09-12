import React, {useEffect, useState} from "react";

import MDFile from "../../postData/about.md";
import ReactMarkdown from "react-markdown";
import RehypeRaw from "rehype-raw";
import RemarkGFM from "remark-gfm";

import "./About.css";

const About = () => {
    const [postData, setPostData] = useState("");

    useEffect(() => {
        fetch(MDFile).then(
            MDResource => MDResource.text().then(
                MDText => setPostData(MDText)
            )
        );

        return () => {
            window.scrollTop = 0;
        }
    }, []);

    return(
        <div align="center">
            <div className="AboutContent">
                <div className="markdown-body-about">
                    <ReactMarkdown
                        children={postData}
                        components={PostRenderer(postID, postType)}
                        rehypePlugins={[RehypeRaw]}
                        remarkPlugins={[RemarkGFM]} />
                </div>
            </div>

            <div className="divAboutComment">
                <Utterance />
            </div>
        </div>
    )
}

export default About;