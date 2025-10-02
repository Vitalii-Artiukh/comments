'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/app/components/button/button';

const ErrorComponent = ({ error, reset }) => {
  return (
    <div>
      <p>{`Something went wrong: ${error.message}`}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
};

export default ErrorComponent;
