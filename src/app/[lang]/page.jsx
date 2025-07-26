import React from 'react';
import { getDictionary } from '@/app/lib/dictionaries/dictionaries';
import Header from '@/app/components/header/header';
import PostsTitle from '@/app/components/posts-title/posts-title';
import Footer from '@/app/components/footer/footer';

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Header dictionary={dictionary} lang={lang} />
      <main>
        <PostsTitle dictionary={dictionary} lang={lang} />
      </main>
      <Footer dictionary={dictionary} lang={lang}>
        Footer
      </Footer>
    </>
  );
}
