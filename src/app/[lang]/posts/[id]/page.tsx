import React from 'react';
import Post from '@/app/components/post/post';
import { getPosts } from '@/app/lib/api';
import { getDictionary } from '@/app/lib/dictionaries/dictionaries';
import ErrorButton from '@/app/components/errorButton/error-button';
import { notFound } from 'next/navigation';
import { PostTypes } from '@/app/lib/types/types';

interface PageProps {
  params: Promise<{
    lang: string;
    id: string;
  }>;
}

export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  const posts: PostTypes[] = await getPosts();

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

export default async function Page({ params }: PageProps) {
  const { lang, id } = await params;
  const dictionary = await getDictionary(lang);
  // const { id } = await params;

  const posts: PostTypes[] = await getPosts();
  const post = posts.find((p) => p.id.toString() === id);
  if (!post) {
    notFound();
  }

  return (
    <>
      <ErrorButton dictionary={dictionary}>
        {dictionary.common.clickButton}
      </ErrorButton>
      <Post id={id} dictionary={dictionary} />
    </>
  );
}
