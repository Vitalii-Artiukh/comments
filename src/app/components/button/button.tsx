'use client';

import React from 'react';
import clsx from 'clsx';
import css from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  // rest?: any;
}

const Button = ({ disabled, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={clsx(
        css.button,
        !disabled && css.active,
        disabled && css.disabled
      )}
    />
  );
};

export default Button;
