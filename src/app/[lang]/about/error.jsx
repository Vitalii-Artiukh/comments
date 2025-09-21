'use client';

import React from 'react';

const ErrorComponent = ({ error }) => {
  return (
    <div>
      <p>{`Something went wrong: ${error.message}`}</p>
    </div>
  );
};

export default ErrorComponent;
