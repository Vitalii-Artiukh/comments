import React from 'react';
import css from './header.module.css';
import Link from 'next/link';

const Header = ({ children }) => {
  return (
    <header className={css.header}>
      <Link href={'/'} className={css.homeLink}>
        <h1 className={css.title}>Home</h1>
      </Link>
      {children}
    </header>
  );
};

export default Header;
