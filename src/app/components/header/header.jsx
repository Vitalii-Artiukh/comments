import React from 'react';
import Link from 'next/link';
import css from './header.module.css';
import LanguageSwitcher from '@/app/components/LanguageSwitcher/LanguageSwitcher';

const Header = ({ dictionary, lang, children }) => {
  return (
    <header className={css.header}>
      <Link href={`/${lang}`} className={css.homeLink}>
        <h1 className={css.title}>{dictionary.nav.home}</h1>
      </Link>
      <Link href={`/${lang}/about`} className={css.about}>
        {dictionary.nav.about}
      </Link>

      {children}
      <LanguageSwitcher currentLang={lang} />
    </header>
  );
};

export default Header;
