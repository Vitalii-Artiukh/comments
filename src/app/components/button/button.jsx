'use client';

import React from 'react';
import clsx from 'clsx';
import css from './button.module.css';

const Button = ({ disabled, ...rest }) => {
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
