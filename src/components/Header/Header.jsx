import React from 'react';
import mod_css from './Header.module.css'

const Header = () => {
  return (
      <header className={mod_css.header}>
        <img src='https://blog.everest.mk/wp-content/uploads/2015/10/114.jpg'/>
      </header>
  );
}

export default Header;
