import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Container = styled.div`
`;

const {category} = props.location;

const Posts = props => {
  const {
    className,
  } = props;

  return (
    <Container className={className}>
      <div>Posts(Category is {category})</div>
    </Container>
  );
}

Posts.propTypes = {
  className: PropTypes.string,
}

export default Posts;