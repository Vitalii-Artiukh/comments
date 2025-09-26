import React from 'react';
import About from '@/app/components/about/about';
import ErrorButton from '@/app/components/errorButton/error-button';
import { getDictionary } from '@/app/lib/dictionaries/dictionaries';

const Page = async ({ params }) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  console.log(dictionary);

  return (
    <div>
      <ErrorButton dictionary={dictionary}>
        <p>{dictionary.common.clickButton}</p>
      </ErrorButton>
      <About lang={lang} />
    </div>
  );
};

export default Page;
