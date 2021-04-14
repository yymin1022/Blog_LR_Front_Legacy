import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";

import {DiscussionEmbed} from "disqus-react";
import ReactMarkdown from "react-markdown";

import CodeBlock from "./CodeBlock";
import postDB from "/home/server/web/src/posts/DB.json";
import "./PostView.css";

class PostView extends Component{
  constructor(){
    super();
    this.state ={isNotFound: true, postDate: "", postID: "", markdown: "", postTag: "", postTitle: "", postURL: ""};
  }

  UNSAFE_componentWillMount(){
    postDB.map(item => {
      if(item.postID == this.props.match.params.postID){
        const postDate = item.postDate;
        const postID = item.postID;
        const postTag = item.postTag;
        const postTitle = item.postTitle;
        const postURL = "https://blog-new.defcon.or.kr/postview/" + item.postID;
        const MDFile = require("/home/server/web/src/posts/" + postID + ".md").default;

        this.setState({isNotFound: null});
        this.setState({postDate: postDate});
        this.setState({postID: postID});
        this.setState({postTag: postTag});
        this.setState({postTitle: postTitle});
        this.setState({postURL: postURL});
        fetch(MDFile).then(res => res.text()).then(text => this.setState({markdown: text}));
      }
    })

    console.log(this.state.isNotFound);
  }

  componentDidUpdate(){
    window.scrollTop = 0;
  }

  render(){
    if (this.state.isNotFound) {
      return <Redirect to="/PostNotFound" />
    }

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
          <Link to={"/home"}>
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