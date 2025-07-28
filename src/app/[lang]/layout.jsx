import React from 'react';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import { getDictionary } from '@/app/lib/dictionaries/dictionaries';

export async function generateStaticParams() {
  return [{ lang: 'uk' }, { lang: 'en' }];
}

export default async function Layout({ children, params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header dictionary={dictionary} lang={lang} />
      <main>
        <div>{children}</div>
      </main>
      <Footer>Footer</Footer>
    </>
  );
}
