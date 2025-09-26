'use client';

import React, { useEffect, useState } from 'react';
import Button from '@/app/components/button/button';

const ErrorButton = ({ dictionary, children }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 4) {
      throw new Error(`${dictionary.common.began}`);
    }
  }, [count]);

  return <Button onClick={() => setCount(count + 1)}>{children}</Button>;
};

export default ErrorButton;
