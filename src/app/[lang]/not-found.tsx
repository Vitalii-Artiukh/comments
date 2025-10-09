'use client';

import React from 'react';
import Link from 'next/link';
import { useDictionary } from '@/app/components/providers';

const NotFound = ({}) => {
  const dictionary: {
    notFound: {
      title: string;
      description: string;
    };
    error: {
      again: string;
    };
  } = useDictionary();

  return (
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
  );
};

export default NotFound;
