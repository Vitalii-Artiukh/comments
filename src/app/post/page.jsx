import React from 'react';
import { getPostText } from '@/app/lib/api';

const Page = async () =>
  // { params }
  {
    // const { id } = await params;
    // const post = await getPostText(id);
    // console.log(id, post);

    return (
      <div>
        <h1>Hello friends</h1>
        {/*<p>{id}</p>*/}
        {/*<p>{post.body}</p>*/}
      </div>
    );
  };

export default Page;
