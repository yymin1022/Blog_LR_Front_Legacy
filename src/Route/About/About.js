import React, {useEffect, useState} from "react";

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
        setMetaTags({title: "About - LR's IT Blog"});

        fetch(MDFile).then(
            MDResource => MDResource.text().then(
                MDText => setAboutData(MDText)
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
    )
}

const setMetaTags = (
    {
        title = "LR's IT Blog",
        description = "대학생 1인개발자 LR의 IT블로그",
        imageUrl = "logo.png"
    }) => {
    document.querySelector('meta[property="og:title"]').setAttribute("content", `${title}`);
    document.querySelector('meta[property="og:description"]').setAttribute("content", description);
    document.querySelector('meta[property="og:image"]') .setAttribute("content", imageUrl);
    document.querySelector('meta[property="og:url"]') .setAttribute("content", window.location.href);
};

export default About;