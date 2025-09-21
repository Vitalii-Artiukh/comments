'use client';

import React, { useEffect, useState } from 'react';
import Button from '@/app/components/button/button';

const ErrorButton = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 4) {
      throw new Error('Забагато клікаєш');
    }
  }, [count]);

  return <Button {...props} onClick={() => setCount(count + 1)}></Button>;
};

export default ErrorButton;
