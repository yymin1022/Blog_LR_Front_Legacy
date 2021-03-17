import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Container = styled.div`
`;

const About = props => {
  const {
    className,
  } = props;

  return (
    <Container className={className}>
      <div>About</div>
    </Container>
  );
}

About.propTypes = {
  className: PropTypes.string,
}

export default About;