import React from 'react';
import Post from '@/app/components/post/post';

export default async function Page({ params }) {
  const { id } = await params;

  return (
    <>
      <Post id={id} />
    </>
  );
}
