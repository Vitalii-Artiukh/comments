import React from 'react';
import css from './footer.module.css';
import Container from '@/app/components/container/container';
import Link from 'next/link';
import { EMAIL } from '@/app/lib/utils/constants';

const Footer = ({ dictionary, lang, children }) => {
  return (
    <footer className={css.footer}>
      <Container className={css.dataWrapper}>
        <div className={css.textWrapper}>
          <p className={css.devInfo}>
            {dictionary.about.titleName}:
            <span className={css.devName}>{dictionary.about.name}</span>
          </p>
          <p className={css.devInfo}>
            {dictionary.about.titleEmail}:
            <span className={css.devName}>{EMAIL}</span>
          </p>
        </div>

        {children}
        <Link href={`/${lang}/about`} className={css.aboutLink}>
          {dictionary.nav.about}
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
