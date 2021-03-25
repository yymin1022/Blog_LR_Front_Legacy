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
      for(var i = 0; i < 1; i++){
        var fs = require('fs');
        fs.readdir('/posts', (err, file_list) => {
          alert(file_list);
        }
      }
    </Container>
  );
}

Home.propTypes = {
  className: PropTypes.string,
}

export default Home;