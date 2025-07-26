import React from 'react';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import PostsTitle from '@/app/components/posts-title/posts-title';
import { getDictionary } from '@/app/lib/dictionaries/dictionaries';
import Page from './[lang]/page';

export default async function Home() {
  // const dictionary = await getDictionary();
  return (
    <>
      <Page />
    </>
  );
}
