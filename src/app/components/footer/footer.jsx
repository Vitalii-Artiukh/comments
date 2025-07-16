import React from 'react';
import css from './footer.module.css';

const Footer = ({ children }) => {
  return (
    <footer className={css.footer}>
      <h1 className={css.title}>{children}</h1>
    </footer>
  );
};

export default Footer;
