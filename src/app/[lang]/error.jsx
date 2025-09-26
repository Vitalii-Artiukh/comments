'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/app/components/button/button';

const ErrorComponent = ({ error }) => {
  return (
    <div>
      <p>{`Something globally went wrong: ${error.message}`}</p>
      <Link href={'/'}>Return to home</Link>
    </div>
  );
};

export default ErrorComponent;
