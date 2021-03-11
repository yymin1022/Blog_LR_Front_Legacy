import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 56px;
  width: 100%;

  background-color: skyblue;
`;

const Header = props => {
  const {
    className,
  } = props;
  
  return (
    <Container className={ className }>
      Header
    </Container>
  );
}

Header.propTypes = {
  className: PropTypes.string,
}

export default Header;