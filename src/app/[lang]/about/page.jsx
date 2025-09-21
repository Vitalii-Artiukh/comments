import React from 'react';
import About from '@/app/components/about/about';
import ErrorButton from '@/app/components/errorButton/error-button';

const Page = async ({ params }) => {
  const { lang } = await params;
  return (
    <div>
      <ErrorButton />
      <About lang={lang} />
    </div>
  );
};

export default Page;
