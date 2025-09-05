import React from 'react';
import css from './footer.module.css';
import Container from '@/app/components/container/container';
import Link from 'next/link';
import { EMAIL } from '@/app/lib/utils/constants';
import clsx from 'clsx';

const Footer = ({ dictionary, lang, children }) => {
  const about = dictionary?.about ?? {};
  const titleName = about?.titleForName ?? 'Name';
  const titleEmail = about?.titleForEmail ?? 'Email';

  return (
    <footer className={css.footer}>
      <Container className={css.dataWrapper}>
        <div className={css.textWrapper}>
          <p className={css.devInfo}>
            {titleName}:
            <span className={css.devName}>{dictionary.about.name}</span>
          </p>
          <p className={css.devInfo}>
            {titleEmail}:{' '}
            <Link
              href={`mailto:${EMAIL}`}
              className={clsx(css.devName, css.email)}
            >
              {EMAIL}
            </Link>
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
