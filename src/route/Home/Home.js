import React, {Component} from 'react';

import styled from 'styled-components';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    function getPosts(props){
      var fs = require('fs');
      fs.readdir('/posts', (err, file_list) => {
        alert(file_list);
      });
    }

    return(
      <div>
        {getPosts};
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