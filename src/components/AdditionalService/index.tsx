import Toggle from 'components/global/Toggle';
import styles from './additionalService.module.scss';

interface AdditionalServiceProps {
  title: string;
  description: string;
}

const AdditionalService = ({ title, description }: AdditionalServiceProps) => {
  return (
    <div className={styles['service']}>
      <Toggle label={`Toggle ${title}`} />

      <div className={styles['service__details']}>
        <h3 className={styles['service__title']}>{title}</h3>
        <p className={styles['service__description']}>{description}</p>
      </div>
    </div>
  );
};

export default AdditionalService;
