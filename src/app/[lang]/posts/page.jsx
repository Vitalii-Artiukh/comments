import React from 'react';
import HomeComponent from '@/app/components/homeComponent/homeComponent';
import { getDictionary } from '@/app/lib/dictionaries/dictionaries';
import getQueryClient from '@/app/lib/utils/getQueryClient';
import { getPosts } from '@/app/lib/api';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import PostsTitle from '@/app/components/posts-title/posts-title';

export default async function Page({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <PostsTitle dictionary={dictionary} lang={lang} />
    </HydrationBoundary>
  );
}
