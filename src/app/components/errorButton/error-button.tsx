'use client';

import React, { useEffect, useState } from 'react';
import Button from '@/app/components/button/button';

interface ErrorButtonProps {
  dictionary: {
    common: {
      began: string;
    };
  };
  children: React.ReactNode;
}

const ErrorButton = ({ dictionary, children }: ErrorButtonProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 1) {
      throw new Error(`${dictionary.common?.began}`);
    }
  }, [count]);

  return <Button onClick={() => setCount(count + 1)}>{children}</Button>;
};

export default ErrorButton;
