import React from 'react';
import Post from '@/app/components/post/post';
import { getPostText } from '@/app/lib/api';

export async function generateStaticParams() {
  const posts = await getPostText();

  const limitedPosts = posts.slice(0, 20);

  const params = [];

  for (const post of limitedPosts) {
    params.push({
      id: post.id.toString(),
    });
  }

  return params;
}

export const dynamicParams = true;

export default async function Page({ params }) {
  const { id } = await params;

  return (
    <>
      <Post id={id} />
    </>
  );
}
