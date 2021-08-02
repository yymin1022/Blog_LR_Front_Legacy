import React from "react";
import {Link} from "react-router-dom";

import Button from "@material-ui/core/Button";

import "./Home.css";

const Home = () => {
    return(
        <div>
            <p id="blogTitle1">1인개발자<br/></p>
            <p id="blogTitle2">LR</p>
            <p id="blogTitle3">의<br/></p>
            <p id="blogTitle4">IT블로그</p>

            <Link to={"/blog"}>
                <Button>Blog</Button>
            </Link>

            <Link to={"/project"}>
                <Button>Project</Button>
            </Link>

            <Link to={"/about"}>
                <Button>About</Button>
            </Link>
        </div>
    )
}

export default Home;