import React, {Component} from "react";

import {DiscussionEmbed} from 'disqus-react';
import ReactMarkdown from "react-markdown";

import CodeBlock from "./CodeBlock";
import "./PostView.css";

class PostView extends Component{
  constructor(){
    super();
    this.state ={id: "", markdown: "", title: "", url: ""};
  }

  UNSAFE_componentWillMount(){
    const postID = this.props.match.params.id;
    const postURL = "https://blog-new.defcon.or.kr/postview/" + this.props.match.params.id;
    const MDFile = require("/home/server/web/src/posts/" + postID + ".md").default;

    this.setState({id: postID});
    this.setState({url: postURL});
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

    const {id} = this.state;
    const {markdown}= this.state;
    const {title} = this.state;
    const {url} = this.state;

    const disqusConfig = {
      url: {url},
      identifier: {id},
      title: {title}
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

        <div className="CommentContent">
          <DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </div>
      </div>
    )
  }
}

export default PostView;