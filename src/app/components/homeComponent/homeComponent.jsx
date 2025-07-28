import React from 'react';
import { getDictionary } from '@/app/lib/dictionaries/dictionaries';
import PostsTitle from '@/app/components/posts-title/posts-title';

const HomeComponent = async ({ lang }) => {
  const dictionary = await getDictionary(lang);

  return <PostsTitle dictionary={dictionary} lang={lang} />;
};

export default HomeComponent;
