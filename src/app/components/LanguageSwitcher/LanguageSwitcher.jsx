'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALS } from '@/app/lib/utils/constants';

const LanguageSwitcher = ({ currentLang }) => {
  const pathname = usePathname();
  const redirectedPathName = (locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };
  return (
    <div>
      {currentLang === LOCALS.UK ? (
        <Link href={redirectedPathName(LOCALS.EN)}>English</Link>
      ) : (
        <Link href={redirectedPathName(LOCALS.UK)}>Українська</Link>
      )}
    </div>
  );
};

export default LanguageSwitcher;
