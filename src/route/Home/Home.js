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
              <div>
                <a href={item.url}>
                  {item.title}({item.date}) : {item.file}
                </a>
                <br/>
              </div>
            );
          })
        }
      </div>
    )
  }
}

export default Home;