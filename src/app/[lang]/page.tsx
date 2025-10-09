import React from 'react';
import getQueryClient from '@/app/lib/utils/getQueryClient';
import { getPosts } from '@/app/lib/api';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import PostsTitle from '@/app/components/posts-title/posts-title';
import { getDictionary } from '@/app/lib/dictionaries/dictionaries';
import ErrorButton from '@/app/components/errorButton/error-button';

export async function generateStaticParams(): Promise<{ lang: string }[]> {
  const locales: string[] = ['uk', 'en'];

  return locales.map((lang) => ({
    lang,
  }));
}

interface HomeProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function Home({ params }: HomeProps) {
  const queryClient = getQueryClient();

  const { lang } = await params;
  const dictionary: {
    common: {
      clickButton: string;
      began: string;
      posts: string;
      readMy: string;
      loading?: string;
    };
  } = await getDictionary(lang);

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <ErrorButton dictionary={dictionary}>
        {dictionary.common.clickButton}
      </ErrorButton>
      <PostsTitle dictionary={dictionary} lang={lang} />
    </HydrationBoundary>
  );
}
