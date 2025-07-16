import React from 'react';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import { getPosts } from '@/app/lib/api';
import PostsTitle from '@/app/components/posts/posts-title';

export default async function Home() {
  return (
    <>
      <Header>Header</Header>
      <main>
        <h1>Home</h1>
        <PostsTitle />
      </main>
      <Footer>Footer</Footer>
    </>
  );
}
