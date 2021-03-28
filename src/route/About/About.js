import React, {Component} from 'react';

import MDFile from '/home/server/web/src/posts/about.md';
import ReactMarkdown from 'react-markdown';

import './About.css';

class About extends Component {
  constructor() {
    super();
    this.state = { markdown: '' };
  }

  componentWillMount() {
    fetch(MDFile).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }

  render() {
    function InlineCodeBlock(props){
      return(
        <span style={{background: '#ffff00'}}>
          {props.value}
        </span>
      )
    }

    function BlockQuoteBlock(props) {
      return (
          <div style={{border: '1px dashed #aaaaaa', borderRadius: 10, paddingLeft: 10, margin: 5}}>
              {props.children}
          </div>
      );
  }
  
  function CodeBlock(props) {
      return (
          <pre style={{background: '#000000', color: '#ffffff', padding: 10}}>
              <code>
                {props.value}
              </code>
            </pre>
      );
  }
  
  
  function TableCellBlock(props) {
      let style = {
          textAlign: props.align ? props.align : 'center',
          padding: 5
      };
  
      if (props.isHeader) {
          style.background = '#ffff00';
          style.border = '1px solid #cccccc';
          style.borderLeft = 0;
          style.borderRight = 0;
      } else {
          style.borderBottom = '1px solid #eeeeee';
      }
  
      return (
          <td style={style}>
              {props.children}
          </td>
      );
    }

    const { markdown } = this.state;

    return(
      <div className='markdown-body'>
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
    )
  }
}

export default About;