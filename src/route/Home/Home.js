import React, {Component} from 'react';

import postDB from '/home/server/web/src/posts/DB.json';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <div>
        {
          postDB.map(item => {
            return(
              <li href="posts">
                {item.title}({item.date}) : {item.file}
              </li>
            );
          })
        }
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