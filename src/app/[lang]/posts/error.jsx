'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/app/components/button/button';

const ErrorComponent = ({ error, reset }) => {
  return (
    <div>
      <p>{`Something globally went wrong: ${error.message}`}</p>
      <Link href={''} onClick={() => reset()}>
        Return to home
      </Link>
    </div>
  );
};

export default ErrorComponent;
