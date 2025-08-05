import React from 'react';
import css from './container.module.css';
import clsx from 'clsx';

const Container = ({ className, children }) => {
  return <div className={clsx(className, css.container)}>{children}</div>;
};

export default Container;
