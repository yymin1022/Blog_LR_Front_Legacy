import React from 'react';
import PropTypes from 'prop-types';

import ReactMd from 'react-md-file';

import styled from 'styled-components';

const Container = styled.div`
`;

const About = props => {
  const {
    className,
  } = props;

  return (
    <Container className={className}>
      <div>
        <ReactMd markdown="# hello world" />
        <ReactMd fileName="/home/server/web/posts/about.md" />
        <ReactMd fileName="/home/server/web/posts/about.md" nested />
      </div>
    </Container>
  );
}

About.propTypes = {
  className: PropTypes.string,
}

export default About;