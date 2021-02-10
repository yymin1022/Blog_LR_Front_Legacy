import React from 'react';
import './Main.css';

import HeaderBar from './HeaderBar';
import PostBox from './PostBox';

import './sass/materialize.scss';

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
