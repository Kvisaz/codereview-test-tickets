import React from 'react';
import 'common.css';
import styles from './tickets.module.css';
import { Logo } from 'components';
import { Ticket } from '../../components/ticket';

interface IProps {

}

export const Tickets: React.FC<IProps> = () => {
  return (<div className={`page`}>
    <div className={`pageHeader ${styles.logo}`}>
      <Logo />
    </div>
    <div className={`pageContent`}>
      <div className={`pageColumn pageSelectors`}>
           dd
      </div>
      <div className={`pageColumn pageMain`}>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </div>
  </div>);
};