import React, {Component} from "react";

import ReactMarkdown from "react-markdown";

import CodeBlock from "./CodeBlock";
import "./PostView.css";

class PostView extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  UNSAFE_componentWillMount() {
    const params = new URLSearchParams(this.props.location.search);
    const postID = params.get("id");
    const MDFile = require("/home/server/web/src/posts/" + postID + ".md").default;

    fetch(MDFile).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }

  render() {
    function BlockQuoteBlock(props) {
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
  
  function TableCellBlock(props) {
      let style = {
          textAlign: props.align ? props.align : "center",
          padding: 5
      };
  
      if (props.isHeader) {
          style.background = "#ffff00";
          style.border = "1px solid #cccccc";
          style.borderLeft = 0;
          style.borderRight = 0;
      } else {
          style.borderBottom = "1px solid #eeeeee";
      }
  
      return (
          <td style={style}>
              {props.children}
          </td>
      );
    }

    const {markdown} = this.state;

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
              }} />
          </div>
        </div>
      </div>
    )
  }
}

export default PostView;