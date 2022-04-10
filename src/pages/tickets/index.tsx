import React from 'react';
import 'common.css';
import styles from './tickets.module.css';
import { Logo } from 'components';

interface IProps {

}

export const Tickets: React.FC<IProps> = () => {
  return (<div className={`page`}>
    <div className={`row ${styles.logo}`}>
      <Logo />
    </div>
  </div>);
};