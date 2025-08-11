import React from 'react';
import { getDictionary } from '@/app/lib/dictionaries/dictionaries';
import css from './about.module.css';

const About = async ({ lang }) => {
  // const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div className={css.aboutWrapper}>
      <h1 className={css.title}>{dictionary.nav.about}</h1>
      <p className={css.titleText}>
        {dictionary.about.titleName}:{' '}
        <span className={css.text}>{dictionary.about.name}</span>
      </p>
      <p className={css.titleText}>
        {dictionary.about.titleEmail}:{' '}
        <span className={css.textEmail}>{dictionary.about.email}</span>
      </p>
    </div>
  );
};

export default About;
