import { ReactComponent as DropdownIcon } from 'assets/vectors/arrow-down.svg';
import styles from './select.module.scss';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children?: React.ReactNode;
}

const Select = ({ children }: SelectProps) => {
  return (
    <div className={styles['select-group']}>
      <select className={styles['select-group__select']}>{children}</select>
      <div className={styles['select-group__dropdown-icon']}>
        <DropdownIcon />
      </div>
    </div>
  );
};

export default Select;
