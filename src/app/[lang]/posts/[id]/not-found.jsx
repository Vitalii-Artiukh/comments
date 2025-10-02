import React from 'react';
import Link from 'next/link';

const NotFound = ({}) => {
  return (
    <div>
      <p>Could not find post</p>
      <Link href={'/posts'}>Return to posts</Link>
    </div>
  );
};

export default NotFound;
