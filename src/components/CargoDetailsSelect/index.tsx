import { useState } from 'react';
import styles from './cargoDetailsSelect.module.scss';

const CargoDetailsSelect = () => {
  const [selected, setSelected] = useState<'dimensions' | 'package'>(
    'dimensions',
  );

  const dimensionsSelected = selected === 'dimensions';
  return (
    <div className={styles['details-select']}>
      <button
        className={`${styles['details-select__button']} ${
          dimensionsSelected ? styles['details-select__button--selected'] : ''
        }`}
        onClick={() => setSelected('dimensions')}
      >
        Total Dimensions
      </button>
      <button
        className={`${styles['details-select__button']} ${
          !dimensionsSelected ? styles['details-select__button--selected'] : ''
        }`}
        onClick={() => setSelected('package')}
      >
        Package Details
      </button>
    </div>
  );
};

export default CargoDetailsSelect;
