import React from 'react';
import About from '@/app/components/about/about';
import ErrorButton from '@/app/components/errorButton/error-button';
import {
  DictionaryLocale,
  getDictionary,
} from '@/app/lib/dictionaries/dictionaries';

interface PageProps {
  params: Promise<{
    lang: DictionaryLocale;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

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
