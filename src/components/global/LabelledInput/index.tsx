import styles from './labelledInput.module.scss';

interface LabelledInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  metric: string;
  label: string;
}

const LabelledInput = ({ label, metric, ...rest }: LabelledInputProps) => {
  return (
    <div className={styles['input-group']}>
      <label className={styles['input-group__label']}>{label}</label>
      <div className={styles['input-group__container']}>
        <input className={styles['input-group__input']} {...rest} />
        <p className={styles['input-group__metric']}>{metric}</p>
      </div>
    </div>
  );
};

export default LabelledInput;
