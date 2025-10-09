import React from 'react';
import { getPostText } from '@/app/lib/api';
import css from './post.module.css';
import { PostTypes } from '@/app/lib/types/types';

interface PostProps {
  id: string | number;
  dictionary: {
    common: {
      user: string;
      id: string | number;
    };
  };
}

export default async function Post({ id, dictionary }: PostProps) {
  if (!id) return null;
  const post: PostTypes = await getPostText(id);

  const user = () => {
    if (post.userName && post.userName !== '') {
      return `User: ${post.userName}`;
    }
    return `${dictionary.common.user} ${dictionary.common.id}: ${post.userId}`;
  };

  return (
    <div className={css.postWrapper}>
      <h2 className={css.userName}>{user()}</h2>
      <h2 className={css.title}>{post.title}</h2>
      <p className={css.post}>{post.body}</p>
    </div>
  );
}
