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
      var result;

      // listReactFiles(__dirname).then(files => result = files)
      
      var fs = require('fs');
      var file_list = [];
      
      fs.readdirSync('./posts', (err, file_list) => {
        return file_list;
      });
      return result;
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