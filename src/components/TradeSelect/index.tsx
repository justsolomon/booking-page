import { useState } from 'react';
import styles from './tradeSelect.module.scss';

const TradeSelect = () => {
  const [selected, setSelected] = useState<'import' | 'export' | ''>('');

  const isImport = selected === 'import';

  return (
    <div className={styles['trade-select']}>
      <button
        className={`${styles['trade-select__button']} ${
          isImport ? styles['trade-select__button--selected'] : ''
        }`}
        onClick={() => setSelected('import')}
      >
        Import
      </button>
      <button
        className={`${styles['trade-select__button']} ${
          !isImport ? styles['trade-select__button--selected'] : ''
        }`}
        onClick={() => setSelected('export')}
      >
        Export
      </button>
    </div>
  );
};

export default TradeSelect;
