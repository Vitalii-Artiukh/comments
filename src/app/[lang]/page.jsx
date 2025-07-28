import React from 'react';
import { getDictionary } from '@/app/lib/dictionaries/dictionaries';
import HomeComponent from '@/app/components/homeComponent/homeComponent';

export default async function Home({ params }) {
  const { lang } = await params;

  return <HomeComponent lang={lang} />;
}
