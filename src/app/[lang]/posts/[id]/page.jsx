import React from 'react';
import Post from '@/app/components/post/post';
import { getPostText } from '@/app/lib/api';

export async function generateStaticParams() {
  const posts = await getPostText();

  // Якщо потрібно обмежити кількість статичних сторінок до 10
  // const limitedPosts = posts.slice(0, 10);

  // const params = [];

  // for (const post of limitedPosts) {
  //   params.push({
  //     id: post.id.toString(),
  //   });
  // }
  //
  // return params;

  return posts.slice(0, 15).map((post) => ({
    id: post.id.toString(),
  }));
}

export const dynamicParams = true;

export default async function Page({ params }) {
  const { id } = params;

  return (
    <>
      <Post id={id} />
    </>
  );
}
