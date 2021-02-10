import React from 'react';
import './Main.css';

import Footer from './Footer';
import HeaderBar from './HeaderBar';

import './sass/materialize.scss';

function Main() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <HeaderBar />
        </div>
      </nav>

      <Footer />
    </div>
  );
}

export default Main;
