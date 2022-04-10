import React from 'react';
import styles from './ticker.module.css';
import { Cell, CompaniesLogos } from './components';

export interface ITicketProps {

}

export const Ticket: React.FC = () => {
  return (
    <div className={`block ${styles.ticket}`}>
      <div className={styles.header}>
        <div className={styles.price}>13 500 Р</div>
        <img src={CompaniesLogos.S7} className={styles.logo} alt={'company'}/>
      </div>
      <div className={styles.cells}>
        <div className={styles.cellsRow}>
          <Cell label={'2 пересадки'} value={'HKG1, JNB'} />
          <Cell label={'2 пересадки'} value={'HKG, JNB'} />
          <Cell label={'2 пересадки'} value={'HKG, JNB'} /></div>
        <div className={styles.cellsRow}>
          <Cell label={'2 пересадки'} value={'HKG2, JNB'} />
          <Cell label={'2 пересадки'} value={'HKG, JNB'} />
          <Cell label={'2 пересадки'} value={'HKG, JNB'} /></div>
      </div>
    </div>
  );
};