'use client';

import React, { useEffect, useState } from 'react';
import Button from '@/app/components/button/button';

const ErrorButton = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 4) {
      throw new Error('багато клікаєш');
    }
  }, [count]);

  return <Button {...props} onClick={() => setCount(count + 1)}></Button>;
};

export default ErrorButton;
