import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Container = styled.div`
  left: 0px;

  height: 56px;
  width: 0px;

  background-color: coral;
`;

const Footer = props => {
  const {
    className,
  } = props;
  
  return (
    <Container className={ className }>
      Footer
    </Container>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
}

export default Footer;