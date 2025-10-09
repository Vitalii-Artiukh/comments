'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALS } from '@/app/lib/utils/constants';
import css from './LanguageSwitcher.module.css';
import Image from 'next/image';

interface LanguageSwitcherProps {
  currentLang: string;
}

const LanguageSwitcher = ({ currentLang }: LanguageSwitcherProps) => {
  const pathname = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };
  return (
    <div className={css.languageWrapper}>
      {currentLang === LOCALS.UK ? (
        <Link
          className={css.language}
          href={redirectedPathName(LOCALS.EN)}
          title="English"
        >
          <Image
            className={css.flag}
            src="/FlagUnitedKingdom.png"
            alt="English"
            width={34}
            height={24}
            priority
          />
        </Link>
      ) : (
        <Link
          className={css.language}
          href={redirectedPathName(LOCALS.UK)}
          title="Українська"
        >
          <Image
            className={css.flag}
            src="/flagUkraine.png"
            alt="Українська"
            width={34}
            height={24}
            priority
          />
        </Link>
      )}
    </div>
  );
};

export default LanguageSwitcher;
