import React from 'react';
import PostsTitle from '@/app/components/posts-title/posts-title';
import { getDictionary } from '@/app/lib/dictionaries/dictionaries';
import HomeComponent from '@/app/components/homeComponent/homeComponent';

export default async function Page({ params }) {
  const { lang } = await params;

  return <HomeComponent lang={lang} />;
}
