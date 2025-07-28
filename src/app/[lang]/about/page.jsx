import React from 'react';
import About from '@/app/components/about/about';

const Page = async ({ params }) => {
  const { lang } = await params;
  return (
    <div>
      <About lang={lang} />
    </div>
  );
};

export default Page;
