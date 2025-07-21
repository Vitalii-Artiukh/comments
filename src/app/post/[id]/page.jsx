import React from 'react';
import { getPostText } from '@/app/lib/api';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';

export default async function Page({ params }) {
  const { id } = params;
  const post = await getPostText(id);

  const user = () => {
    if (post.name && post.name !== '') {
      return `User: ${post.name}`;
    }
    return `User id: ${post.userId}`;
  };

  return (
    <>
      <Header>{user()}</Header>

      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <Footer>{user()}</Footer>
    </>
  );
}
