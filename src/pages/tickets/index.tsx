import React from 'react';
import 'common.css';
import { CompanySelector, Logo, SortButtons, Ticket, TransferChecks } from 'components';
import styles from './tickets.module.css';
import { useTicketState } from '../../store';

export const Tickets: React.FC = () => {

  const { tickets } = useTicketState();
  console.log('tickets', tickets);

  return (<div className={`page`}>
    <div className={`pageHeader ${styles.logo}`}>
      <Logo />
    </div>
    <div className={`pageContent`}>
      <div className={`pageColumn pageSelectors`}>
        <TransferChecks />
        <CompanySelector />
      </div>
      <div className={`pageColumn pageMain`}>
        <SortButtons />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </div>
  </div>);
};