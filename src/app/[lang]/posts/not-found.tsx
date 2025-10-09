import React from 'react';
import Link from 'next/link';

const NotFound = ({}) => {
  return (
    <div>
      <h1>404</h1>
      <p>Such page does not exist</p>
      <Link href={'/posts'}>Return to posts</Link>
    </div>
  );
};

export default NotFound;
