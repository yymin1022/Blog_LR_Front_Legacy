import React, {Component} from 'react';

import listReactFiles from 'list-react-files'

import styled from 'styled-components';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    function getPosts(props){      
      const fs = require('fs');
      
      fs.readdir('./posts', function(err, content) {
        if(err){
          return err;
        }else{
          return content;
        }
      });
    }

    return(
      <div>
        {getPosts()}
      </div>
    )
  }
}

// const Container = styled.div`
// `;

// const Home = props => {
//   const {
//     className,
//   } = props;

//   return (
//     <Container className={className}>
      
//     </Container>
//   );
// }

// Home.propTypes = {
//   className: PropTypes.string,
// }

export default Home;