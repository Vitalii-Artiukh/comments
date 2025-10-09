import React from 'react';
import Link from 'next/link';
import css from './header.module.css';
import LanguageSwitcher from '@/app/components/LanguageSwitcher/LanguageSwitcher';
import Container from '@/app/components/container/container';

interface HeaderProps {
  children?: React.ReactNode;
  dictionary: string[];
  lang: string;
}

const Header = ({ dictionary, lang, children }: HeaderProps) => {
  return (
    <header className={css.header}>
      <Container className={css.dataWrapper}>
        <Link href={`/${lang}/posts`} className={css.homeLink}>
          <h1 className={css.title}>{dictionary.nav.home}</h1>
        </Link>
        <Link href={`/${lang}/about`} className={css.aboutLink}>
          {dictionary.nav.about}
        </Link>

        {children}
        <LanguageSwitcher currentLang={lang} />
      </Container>
    </header>
  );
};

export default Header;
