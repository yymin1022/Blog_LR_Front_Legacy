import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Container = styled.div`
`;

const Posts = props => {
  const {
    className,
    location,
  } = props;

  return (
    <Container className={className}>
      <div>Posts(Category is {location})</div>
    </Container>
  );
}

Posts.propTypes = {
  className: PropTypes.string,
}

export default Posts;