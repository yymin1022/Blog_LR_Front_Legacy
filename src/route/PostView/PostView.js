import React, {Component} from "react";
import {Link} from "react-router-dom";

import Button from "@material-ui/core/Button";
import {DiscussionEmbed} from "disqus-react";
import ReactMarkdown from "react-markdown";

import CodeBlock from "./CodeBlock";
import "./PostView.css";

class PostView extends Component{
  constructor(){
    super();
    this.state ={postDate: "", postID: "", markdown: "", postTag: "", postTitle: "", postURL: ""};
  }

  UNSAFE_componentWillMount(){
    const postDate = this.props.location.state.postDate;
    const postID = this.props.match.params.postID;
    const postTag = this.props.location.state.postTag;
    const postTitle = this.props.location.state.postTitle;
    const postURL = "https://blog-new.defcon.or.kr/postview/" + this.props.match.params.postID;
    const MDFile = require("/home/server/web/src/posts/" + postID + ".md").default;

    this.setState({postDate: postDate});
    this.setState({postID: postID});
    this.setState({postTag: postTag});
    this.setState({postTitle: postTitle});
    this.setState({postURL: postURL});
    fetch(MDFile).then(res => res.text()).then(text => this.setState({markdown: text}));
  }

  render(){
    function BlockQuoteBlock(props){
      return (
          <div className="quoteBlock" style={{}}>
             {props.children}
          </div>
      );
  }

  function InlineCodeBlock(props){
    return(
      <span className="inlineCodeBlock">
       {props.value}
      </span>
    )
  }
  
  function TableCellBlock(props){
      let style ={
          textAlign: props.align ? props.align : "center",
          padding: 5
      };
  
      if (props.isHeader){
          style.background = "#ffff00";
          style.border = "1px solid #cccccc";
          style.borderLeft = 0;
          style.borderRight = 0;
      }else{
          style.borderBottom = "1px solid #eeeeee";
      }
  
      return(
          <td style={style}>
             {props.children}
          </td>
      );
    }

    const {markdown}= this.state;

    const postDate = this.state.postDate;
    const postID = this.state.postID;
    const postTag = this.state.postTag;
    const postTitle = this.state.postTitle;
    const postURL = this.state;

    const disqusConfig = {
      url: this.state.postURL,
      identifier: this.state.postID,
      title: this.state.postTitle
    };
    const disqusShortname = "blog-new-defcon-or-kr";

    return(
      <div align="center">
        <div className="PostViewContent">
          <div className="markdown-body">
            <ReactMarkdown
              source={markdown}

              allowDangerousHtml={true}
              escapeHtml={false}
              skipHtml={false}
              renderers={{
                blockquote: BlockQuoteBlock,
                code: CodeBlock,
                inlineCode: InlineCodeBlock,
                tableCell: TableCellBlock
              }}/>
          </div>
        </div>

        <div className="PostTag">
          <p>{postTag}</p>
        </div>

        <hr className="seperator"/>

        <div className="PostCommentContent">
          <DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </div>

        <div className="PostFooter">
          <Link to={"/home"}>
            <Button size="large" style={{color: "#164EAB", size: "15px"}}>Home</Button>
          </Link>
          <Link to={"/about"}>
            <Button size="large" style={{color: "#164EAB"}}>About</Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default PostView;