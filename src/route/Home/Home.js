import React from "react";
import {Link} from "react-router-dom";

import Button from "@material-ui/core/Button";

import "./Home.css";

const Home = () => {
    return(
        <div>
            <p>1인개발자<br/><b>LR</b>의<br/>IT블로그</p>

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