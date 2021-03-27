import React, {Component} from 'react';

import ReactMarkdown from 'react-markdown';

import './Posts.css';

class Posts extends Component {
  constructor() {
    super();
    this.state = { markdown: '' };
  }

  componentWillMount() {
    const searchParam = this.props.location.search;
    const params = new URLSearchParams(searchParam);
    const postID = params.get('id');
    const postRoute = "/home/server/web/src/posts/".concat(postID).concat(".md");
    
    alert(postRoute);

    MDFile = require(postRoute);

    fetch(MDFile).then(res => res.text()).then(text => this.setState({ markdown: text }));
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

export default Posts;