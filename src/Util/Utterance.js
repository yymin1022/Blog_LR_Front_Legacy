import React, {createRef, useEffect} from "react";

const Utterance = () => {
    const commentRef = createRef();

    useEffect(() => {
        const utteranceElement = document.createElement("script");
        const utteranceConfig = {
            async: true,
            crossorigin: "anonymus",
            repo: "yymin1022/Blog_LR_Comments",
            src: "https://utteranc.es/client.js",
            theme: "github-light",
            "issue-term": "pathname"
        };

        Object.entries(utteranceConfig).forEach(([key, value]) => {
            utteranceElement.setAttribute(key, value);
        });

        commentRef.current.appendChild(utteranceElement);
    }, []);

    return(
        <div ref={commentRef}></div>
    )
}

export default Utterance;