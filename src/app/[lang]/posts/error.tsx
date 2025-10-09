'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/app/components/button/button';
import { useDictionary } from '@/app/components/providers';

const ErrorComponent = ({ error, reset }) => {
  const dictionary = useDictionary();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        padding: '50px',
        minHeight: '100vh',
        alignItems: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <p
        style={{ marginBottom: '10px', color: 'darkred', fontSize: '18px' }}
      >{`${dictionary.error.unk}: ${error.message}`}</p>
      <Link href={''} onClick={() => reset()}>
        {dictionary.error.again}
      </Link>
    </div>
  );
};

export default ErrorComponent;
