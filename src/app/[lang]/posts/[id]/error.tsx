'use client';

import React from 'react';
import Button from '@/app/components/button/button';
import { useDictionary } from '@/app/components/providers';

interface ErrorProps {
  error: {
    message: string;
  };
  reset: () => void;
}

const ErrorComponent = ({ error, reset }: ErrorProps) => {
  const dictionary: {
    error: {
      unk: string;
      again: string;
    };
  } = useDictionary();
  return (
    <div>
      <p>
        {`${dictionary.error.unk}: ${error.message}` ||
          `Something went wrong: ${error.message}`}
      </p>
      <Button onClick={() => reset()}>{dictionary.error.again}</Button>
    </div>
  );
};

export default ErrorComponent;
