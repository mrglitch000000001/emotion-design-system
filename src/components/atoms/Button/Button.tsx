import React from 'react';
import './Button.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'download';
};

const Button: React.FC<ButtonProps> = ({ children, className = '', variant, ...rest }) => {
  const modifier = variant ? ` button--${variant}` : '';
  return (
    <button className={`button${modifier} ${className}`.trim()} {...rest}>
      <span className="button__icon" aria-hidden="true">⬇︎</span>
      <span className="button__label">{children}</span>
    </button>
  );
};

export default Button;
