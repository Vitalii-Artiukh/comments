import React from 'react';
import css from './container.module.css';
import clsx from 'clsx';

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
  return <div className={clsx(className, css.container)}>{children}</div>;
};

export default Container;
