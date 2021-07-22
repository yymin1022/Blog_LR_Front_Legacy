import React,{Component} from "react";
import{Redirect} from 'react-router-dom';

import "./NotFoundPage.css";

class NotFoundPage extends Component{
    constructor(props){
        super(props);
        this.state ={
            doRedirect: false
        }
    }

    componentDidMount(){
        setTimeout(function(){
            this.setState({doRedirect: true})
        }.bind(this), 2000)
    }

    render(){
        if(this.state.doRedirect){
            return(
                <Redirect to="/" />
            )
        }else{
            return(
                <div id="Container">
                    <div id="Content" align="center">
                        <img id="DefConLogo" src={process.env.PUBLIC_URL + "/images/DefCon_Logo.svg"} />
              
                        <h1>Page Not Found !</h1>
                        <h3>Redirecting to Blog Home...</h3>
                    </div>
                </div>
            )
        }
    }
}

export default NotFoundPage;