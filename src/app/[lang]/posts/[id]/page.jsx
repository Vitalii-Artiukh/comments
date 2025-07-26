import React from 'react';
import { getPostText } from '@/app/lib/api';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import Post from '@/app/components/post/post';

export default async function Page({ params }) {
  return (
    <>
      {/*<Header>{user()}</Header>*/}
      {/*<main>*/}
      <Post />
      {/*</main>*/}
      {/*<Footer>{user()}</Footer>*/}
    </>
  );
}
