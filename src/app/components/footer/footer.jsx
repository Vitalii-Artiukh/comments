import React from 'react';
import css from './footer.module.css';
import Container from '@/app/components/container/container';

const Footer = ({ children }) => {
  return (
    <footer className={css.footer}>
      <Container className={css.dataWrapper}>
        <h1 className={css.title}>{children}</h1>
      </Container>
    </footer>
  );
};

export default Footer;
