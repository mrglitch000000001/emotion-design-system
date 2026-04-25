import './Button.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'download' | 'primary' | 'secondary' | 'ghost';
};

const Button = ({ children, className = '', variant, ...rest }: ButtonProps) => {
  const modifier = variant ? ` button--${variant}` : '';
  const isDownload = variant === 'download';

  return (
    <button className={`button${modifier} ${className}`.trim()} {...rest}>
      {isDownload && (
        <span className="button__icon" aria-hidden="true">⬇︎</span>
      )}
      <span className="button__label">{children}</span>
    </button>
  );
};

export default Button;
