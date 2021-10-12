import styles from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'icon';
  children: React.ReactNode;
}

const Button = ({
  children,
  className = '',
  variant = 'solid',
  ...rest
}: ButtonProps) => {
  const classList = `${styles['button']} ${className} ${
    styles['button--' + variant]
  }`;

  return (
    <button className={classList} {...rest}>
      {children}
    </button>
  );
};

export default Button;
