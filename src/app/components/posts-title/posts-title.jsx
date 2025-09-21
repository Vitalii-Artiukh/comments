'use client';

import React from 'react';
import { getPosts } from '@/app/lib/api';
import clsx from 'clsx';
import css from './posts-title.module.css';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

const PostsTitle = ({ dictionary, lang }) => {
  // const posts = await getPosts();
  const {
    data: posts,
    isLoading,
    // error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });

  console.log(dictionary);

  if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error:{error.message}</div>;
  // if (!posts) return null;

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>{dictionary.common.posts}</h2>
      {posts.map(({ id, title, body }) => (
        <div key={id} className={css.wrapPostTitle}>
          <h3 className={clsx(css.postTitle)} title={body}>
            {title}
          </h3>
          <Link href={`/${lang}/posts/${id}`} className={css.readLink}>
            {dictionary.common.readMy}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostsTitle;
