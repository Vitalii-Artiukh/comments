// 'use client';

import React from 'react';
import { getPosts } from '@/app/lib/api';
import clsx from 'clsx';
import css from './posts-title.module.css';
import Link from 'next/link';

const PostsTitle = async ({ dictionary, lang }) => {
  const posts = await getPosts();

  return (
    <div className={css.wrapper}>
      <h2>{dictionary.common.posts}</h2>
      {posts.map(({ id, title }) => (
        <div key={id} className={css.wrapPostTitle}>
          <h3 className={clsx(css.postTitle)}>{title}</h3>
          <Link href={`/${lang}/posts/${id}`} className={css.readLink}>
            {dictionary.common.readMy}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostsTitle;
