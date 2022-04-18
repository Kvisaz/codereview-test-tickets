import React from 'react';
import { Cell, CompaniesLogos } from '..';
import styles from '../../ticket.module.css';
import 'common.css';


export const TicketSkeleton: React.FC = () => {
  return (
    <div className={`block ${styles.ticket} skeletonBlock`}>
      <div className={styles.header}>
        <div className='skeleton'>
          <div className={styles.price}>13 500 Р</div>
        </div>
        <div className='skeleton'>
          <img src={CompaniesLogos.S7} className={`${styles.logo} skeleton`} alt={'company'} />
        </div>
      </div>
      <div className={`${styles.cells} skeleton`}>
        <div className={`${styles.cellsRow} skeleton`}>
          <Cell label={'2 пересадки'} value={'HKG1, JNB'} />
          <Cell label={'2 пересадки'} value={'HKG, JNB'} />
          <Cell label={'2 пересадки'} value={'HKG, JNB'} /></div>
        <div className={`${styles.cellsRow} skeleton`}>
          <Cell label={'2 пересадки'} value={'HKG2, JNB'} />
          <Cell label={'2 пересадки'} value={'HKG, JNB'} />
          <Cell label={'2 пересадки'} value={'HKG, JNB'} /></div>
      </div>
    </div>
  );
};