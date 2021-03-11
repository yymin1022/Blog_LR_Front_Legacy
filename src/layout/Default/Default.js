import React from 'react';
import PropTypes from 'prop-types';

import styled, { createGlobalStyle } from 'styled-components';

import Footer from './Footer';
import Header from './Header';
import Section from './Section';

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
      <Header />
      <Section>
        { children }
      </Section>
      <Footer />
    </Container>
  );
}

Default.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Default;