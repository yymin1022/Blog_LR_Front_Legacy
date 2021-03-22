import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Container = styled.div`
`;

const Home = props => {
  const {
    className,
  } = props;

  return (
    <Container className={className}>
      <div>HOME</div>
    </Container>
  );
}

Home.propTypes = {
  className: PropTypes.string,
}

export default Home;