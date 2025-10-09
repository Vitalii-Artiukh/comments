'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/app/components/button/button';
import { dictionaries } from '@/app/lib/utils/constants';
import { useDictionary } from '@/app/components/providers';

const ErrorComponent = ({ error, reset }) => {
  const dictionary = useDictionary();
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
