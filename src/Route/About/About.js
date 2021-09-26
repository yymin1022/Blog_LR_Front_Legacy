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
        <>
            <Helmet meta={[
                    {property: "og:title", content: "LR's IT Blog" },
                    {property: "og:description", content: "대학생 1인개발자 LR의 IT블로그" },
                    {property: "og:image", content: "%PUBLIC_URL%/logo.png" },
                ]} />
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