import React from 'react';
import sol from '../images/testaSol-removebg-preview.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Sistema Solar</h1>
        <img src={ sol } alt="sol" />
      </header>
    );
  }
}

export default Header;
