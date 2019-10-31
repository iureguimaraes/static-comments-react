import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <nav>
        <img src="https://i.imgur.com/KDIDiSE.png" alt="facebook"/>
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>          
        </div>
      </nav>
    </header>
  );
}

export default Header;