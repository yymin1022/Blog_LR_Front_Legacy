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
    const { markdown } = this.state;
    return(
    <div>
      <ReactMarkdown source={markdown} />
    </div>

    )
  }
}

// const Container = styled.div`
// `;

// const About = props => {
//   const {
//     className,
//   } = props;

//   return (
//     <Container className={className}>
//       <div>
//         <ReactMd markdown="# Hello World" />
//         <ReactMd fileName="/home/server/web/posts/about.md" />
//         <ReactMd fileName="/home/se
//         rver/web/posts/about.md" nested />
//       </div>
//     </Container>
//   );
// }

// About.propTypes = {
//   className: PropTypes.string,
// }

export default About;