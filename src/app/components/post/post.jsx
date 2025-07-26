import React from 'react';
import { getPostText } from '@/app/lib/api';
import css from './post.module.css';

export default async function Post({ params }) {
  const { id } = await params;
  const post = await getPostText(id);

  const user = () => {
    if (post.name && post.name !== '') {
      return `User: ${post.name}`;
    }
    return `User id: ${post.userId}`;
  };

  return (
    <div className={css.postWrapper}>
      <h2 className={css.title}>{post.title}</h2>
      <p className={css.post}>{post.body}</p>
    </div>
  );
}
