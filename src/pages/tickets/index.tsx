import React from 'react';
import styles from './tickets.module.css';
import { Logo } from 'components';

interface IProps {

}

export const Tickets: React.FC<IProps> = () => {
  return (<div className={styles.page}>
    <div className={`${styles.row} ${styles.logo}`}>
      <Logo />
    </div>
  </div>);
};