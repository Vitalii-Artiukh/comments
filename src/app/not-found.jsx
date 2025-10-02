import React from 'react';
import Link from 'next/link';

const NotFound = ({}) => {
  return (
    <html lang={'en'}>
      <body>
        <div
          style={{
            textAlign: 'center',
            padding: '50px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <h1 style={{ fontSize: '72px', margin: '0' }}>404</h1>
          <p>Such page does not exist</p>
          <Link href={'/posts'}>Return to posts</Link>
        </div>
      </body>
    </html>
  );
};

export default NotFound;
