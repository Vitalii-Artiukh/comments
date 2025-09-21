import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/app/lib/dictionaries/dictionaries';
import Button from '@/app/components/button/button';

const LinkToHome = async ({ params }) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <Link href={`/${lang}/posts/`}>
      <Button>{dictionary.common.return}</Button>
    </Link>
  );
};

export default LinkToHome;
