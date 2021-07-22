import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Container = styled.div`
    left: 0px;

    height: 100px;
    width: 0px;
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