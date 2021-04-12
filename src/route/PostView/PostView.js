import React, {Component} from "react";
import {Link} from "react-router-dom";

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

  componentDidUpdate(){
    window.scrollTop = 0;
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
    const postURL = this.state.postURL;

    const disqusConfig = {
      url: postURL,
      identifier: postID,
      title: postTitle
    };
    const disqusShortname = "blog-new-defcon-or-kr";

    return(
      <div align="center">
        <div className="PostTitle">
          <h2>{postTitle}</h2>

          <div className="PostAuthorDate">
            <p>written by LR</p>
            <p>|</p>
            <p>{postDate}</p>
          </div>
        </div>

        <hr className="PostSeperator"/>

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

        <div className="PostCommentContent">
          <DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </div>

        <div className="PostFooter">
          <Link to={{
            pathname: "/home",
            state: {
              categoryID: "all"
            }}}>
            <h3 className="PostFooterNav">Home</h3>
          </Link>
          <Link to={"/about"}>
            <h3 className="PostFooterNav">About</h3>
          </Link>
        </div>
      </div>
    )
  }
}

export default PostView;