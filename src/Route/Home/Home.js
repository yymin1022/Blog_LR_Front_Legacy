import React, {useEffect} from "react";
import {Link} from "react-router-dom";

import Button from "@material-ui/core/Button";

import "./Home.css";

const Home = () => {
    useEffect(() => {
        setMetaTags({});

        return () => {
            window.scrollTop = 0;
        }
    }, []);

    return(
        <div className="divHome">
            <div id="divTitle">
                <p className="blogTitle" id="blogTitle1">안녕하세요</p>
                <p className="blogTitle" id="blogTitle2">대학생 1인 개발자</p>
                <p className="blogTitle" id="blogTitle3">LR입니다</p>
            </div>

            <div id="divNav">
                <Link to={"/blog"}>
                    <Button className="btnNav">Blog</Button>
                </Link>

                <Link to={"/project"}>
                    <Button className="btnNav">Project</Button>
                </Link>

                <Link to={"/about"}>
                    <Button className="btnNav">About</Button>
                </Link>
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

export default Home;