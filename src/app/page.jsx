import React from 'react';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import PostsTitle from '@/app/components/posts/posts-title';

export default async function Home() {
  return (
    <>
      <Header>Header</Header>
      <main>
        <PostsTitle />
      </main>
      <Footer>Footer</Footer>
    </>
  );
}
