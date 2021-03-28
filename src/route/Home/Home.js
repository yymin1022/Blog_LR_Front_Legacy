import React, {Component} from 'react';
import {If, Else, Default} from 'react-if';

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
                <If condition={item.pinned}>
                  <Then>
                    <a href={item.url}>
                      !!Pinned Post!!{item.title}({item.date}) : {item.file}
                  </a>
                  </Then>
                <Else>
                  <Then>
                    <a href={item.url}>
                      {item.title}({item.date}) : {item.file}
                    </a>
                  </Then>  
                </Else>
                </If>
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