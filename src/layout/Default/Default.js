import React from 'react';
import PropTypes from 'prop-types';

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%
  }
	body {
		padding: 0;
    margin: 0;
  }
  #root {
    height: 100%;
  }
`;

const Container = styled.div`
  padding-top: 56px;
  height: 100%;
  padding-left: 240px;
`;

const Default = props => {
  const {
    className,
    children,
  } = props;
  
  return (
    <Container className={ className }>
      <GlobalStyle />
    </Container>
  );
}

Default.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Default;