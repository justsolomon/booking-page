import { useState } from 'react';
import styles from './toggle.module.scss';

interface ToggleProps {
  label: string;
}

const Toggle = ({ label }: ToggleProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div
      className={`${styles['toggle']} ${
        checked ? styles['toggle--active'] : ''
      }`}
      onClick={() => setChecked(!checked)}
    >
      <label className={styles['toggle__label']}>{label}</label>
      <input
        type="checkbox"
        className={styles['toggle__checkbox']}
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
      />
    </div>
  );
};

export default Toggle;
