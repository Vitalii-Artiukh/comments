'use client';

import React from 'react';
import Link from 'next/link';
import { useDictionary } from '@/app/components/providers';
import { ErrorTypes } from '@/app/lib/types/types';

interface ErrorProps {
  error: {
    message: string;
  };
  reset: () => void;
}

const ErrorComponent = ({ error, reset }: ErrorProps) => {
  const dictionary: ErrorTypes = useDictionary();

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
      >{`${dictionary.error?.unk}: ${error.message}`}</p>
      <Link href={''} onClick={() => reset()}>
        {dictionary.error?.again}
      </Link>
    </div>
  );
};

export default ErrorComponent;
