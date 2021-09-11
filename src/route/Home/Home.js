import React from "react";
import {Link} from "react-router-dom";

import Button from "@material-ui/core/Button";

import "./Home.css";

const Home = () => {
    return(
        <div>
            <div id="divTitle">
                <p className="blogTitle" id="blogTitle1">안녕하세요</p>
                <p className="blogTitle" id="blogTitle2">대학생 1인 개발자</p>
                <p className="blogTitle" id="blogTitle3">LR입니다</p>
            </div>

            <div id="divNav">
                <Link to={{
                    pathname: "/postlist",
                    state: {
                        postType: "blog"
                    }}}>
                    <Button className="btnNav">Blog</Button>
                </Link>

                <Link to={{
                    pathname: "/postlist",
                    state: {
                        postType: "project"
                    }}}>
                    <Button className="btnNav">Project</Button>
                </Link>

                <Link to={"/about"}>
                    <Button className="btnNav">About</Button>
                </Link>
            </div>
        </div>
    )
}

export default Home;