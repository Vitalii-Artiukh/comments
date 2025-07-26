import React from 'react';
import { Roboto } from 'next/font/google';
import { getDictionary } from '@/app/lib/dictionaries/dictionaries';
import { LOCALS } from '@/app/lib/utils/constants';
import Providers from '@/app/components/providers';
import './globals.css';

const fonts = Roboto({ subsets: ['latin', 'cyrillic'] });

export async function generateStaticParams() {
  return [{ lang: LOCALS.UK }, { lang: LOCALS.EN }];
}

export default async function RootLayout({ children, params }) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body className={fonts.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
