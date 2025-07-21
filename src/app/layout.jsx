import React from 'react';
import { Roboto } from 'next/font/google';
import Providers from '@/app/components/providers';
import './globals.css';

const fonts = Roboto({ subsets: ['latin', 'cyrillic'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fonts.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
