import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AppMarkdown from '/home/server/web/src/posts/about.md';
import ReactMarkdown from 'react-markdown';

import styled from 'styled-components';

class About extends Component {

  constructor() {
    super();
    this.state = { markdown: '' };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(AppMarkdown).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }

  render() {
    function InlineCodeBlock(props){
      return(
        <span style={{background: '#ff0'}}>
          {props.value}
        </span>
      )
    }

    function BlockQuoteBlock(props) {
      return (
          <div style={{border: '1px dashed #aaa', borderRadius: 10, paddingLeft: 10, margin: 5}}>
              {props.children}
          </div>
      );
  }
  
  function CodeBlock(props) {
      return (
          <pre style={{background: '#000', color: '#fff', padding: 10}}>
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
          style.background = '#ff0';
          style.border = '1px solid #ccc';
          style.borderLeft = 0;
          style.borderRight = 0;
      } else {
          style.borderBottom = '1px solid #eee';
      }
  
      return (
          <td style={style}>
              {props.children}
          </td>
      );
    }

    const { markdown } = this.state;
    return(
    <div>
      <ReactMarkdown
        source={markdown}
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