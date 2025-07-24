import React from 'react';
import Link from 'next/link';
import css from './header.module.css';

const Header = ({ children }) => {
  return (
    <header className={css.header}>
      <Link href={'/'} className={css.homeLink}>
        <h1 className={css.title}>Home</h1>
      </Link>
      <Link href={'/about'} className={css.about}>
        About
      </Link>

      {children}
    </header>
  );
};

export default Header;
