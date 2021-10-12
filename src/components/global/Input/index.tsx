import { useEffect, useRef, useState } from 'react';
import styles from './input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: string | React.ReactNode;
  rightIcon?: string | React.ReactNode;
  containerClass?: string;
}

const Input = ({
  leftIcon,
  rightIcon,
  containerClass,
  ...rest
}: InputProps) => {
  const leftElemRef = useRef<HTMLDivElement>(null);
  const [paddingLeft, setPaddingLeft] = useState<number>(leftIcon ? 48 : 16);

  useEffect(() => {
    if (leftElemRef.current) {
      const width = leftElemRef.current.clientWidth;

      if (width > 48) {
        setPaddingLeft(width - 8);
      } else setPaddingLeft(48);
    }
  }, [leftElemRef]);

  return (
    <div className={`${styles['input-group']} ${containerClass}`}>
      {leftIcon ? (
        <div
          className={`${styles['input-group__left-element']} ${
            paddingLeft > 48
              ? styles['input-group__left-element--overflow']
              : ''
          }`}
          ref={leftElemRef}
        >
          {leftIcon}
        </div>
      ) : null}

      <input
        className={`${styles['input-group__input']} ${
          leftIcon ? styles['input-group__input--has-left'] : ''
        } ${rightIcon ? styles['input-group__input--has-right'] : ''}`}
        style={{ paddingLeft }}
        {...rest}
      />

      {rightIcon ? (
        <div className={styles['input-group__right-element']}>{rightIcon}</div>
      ) : null}
    </div>
  );
};

export default Input;
