import React from 'react';
import { getDictionary } from '@/app/lib/dictionaries/dictionaries';

const About = async ({ lang }) => {
  // const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <h1>{dictionary.nav.about}</h1>
    </div>
  );
};

export default About;
