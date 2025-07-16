import React from 'react';
import css from './header.module.css';

const Header = ({ children }) => {
  return (
    <header className={css.header}>
      <h1 className={css.title}>{children}</h1>
    </header>
  );
};

export default Header;
