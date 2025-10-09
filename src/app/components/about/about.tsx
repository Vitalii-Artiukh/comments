import React from 'react';
import { getDictionary } from '@/app/lib/dictionaries/dictionaries';
import css from './about.module.css';
import { EMAIL } from '@/app/lib/utils/constants';
import Link from 'next/link';

const About = async ({ lang }) => {
  const dictionary = await getDictionary(lang);

  return (
    <div className={css.aboutWrapper}>
      <h1 className={css.title}>{dictionary.nav.about}</h1>
      <p className={css.projectDescriptions}>
        {dictionary.about.projectDescription}
      </p>
      <p className={css.titleText}>
        {dictionary.about.titleForName}:{' '}
        <span className={css.text}>{dictionary.about.name}</span>
      </p>
      <p className={css.titleText}>
        {dictionary.about.titleForEmail}:{' '}
        <Link className={css.textEmail} href={`mailto:${EMAIL}`}>
          {EMAIL}
        </Link>
      </p>
    </div>
  );
};

export default About;
