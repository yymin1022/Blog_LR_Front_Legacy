import React, {Component} from 'react';

import MDFile from '/home/server/web/src/posts/about.md';
import ReactMarkdown from 'react-markdown';

import CodeBlock from "./CodeBlock";
import './About.css';

class About extends Component {
  constructor() {
    super();
    this.state = { markdown: '' };
  }

  UNSAFE_componentWillMount() {
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
        <div className="AboutContent">
          <div className="markdown-body-about">
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

export default About;