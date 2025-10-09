'use client';

import React from 'react';
import Link from 'next/link';
import Providers, { useDictionary } from '@/app/components/providers';
import { getDictionary } from '@/app/lib/dictionaries/dictionaries';

const NotFound = ({ lang }) => {
  const dictionary = useDictionary();

  return (
    <html lang={'uk'}>
      <body>
        <Providers dictionary={dictionary}>
          <div
            style={{
              textAlign: 'center',
              padding: '50px',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            <h1 style={{ fontSize: '72px', margin: '0' }}>
              {dictionary.notFound.title}
            </h1>
            <p>{dictionary.notFound.description}</p>
            <Link href={'/posts'}>{dictionary.error.again}</Link>
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default NotFound;
