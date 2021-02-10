import React from 'react';
import './Main.css';

import './materialize.css';

import HeaderBar from './HeaderBar';
import PostBox from './PostBox';

function Main() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <HeaderBar />
        </div>
      </nav>

      <div className="Main">
        <PostBox />
      </div>
    </div>
  );
}

export default Main;
