import React from 'react';
import { getPosts } from '@/app/lib/api';
import clsx from 'clsx';
import css from './posts-title.module.css';

const PostsTitle = async () => {
  const posts = await getPosts();

  return (
    <div>
      {posts.map(({ id, userId, title }) => (
        <h3 key={id} className={clsx(css.title)}>
          {`${id} user ${userId} ${title}`}
        </h3>
      ))}
    </div>
  );
};

export default PostsTitle;
