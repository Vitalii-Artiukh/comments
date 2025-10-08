import React from 'react';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import { getDictionary } from '@/app/lib/dictionaries/dictionaries';
import Container from '@/app/components/container/container';
import { LOCALS } from '@/app/lib/utils/constants';
import Providers from '@/app/components/providers';

export async function generateStaticParams() {
  return [{ lang: 'uk' }, { lang: 'en' }];
}

export default async function Layout({ children, params }) {
  const { lang = LOCALS.EN } = (await params) || {};
  const dictionary = await getDictionary(lang);

  return (
    <Providers dictionary={dictionary} lang={lang}>
      <Header dictionary={dictionary} lang={lang} />
      <main>
        <Container>
          <div>{children}</div>
        </Container>
      </main>
      <Footer dictionary={dictionary} lang={lang} />
    </Providers>
  );
}
