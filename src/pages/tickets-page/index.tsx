import React from 'react';
import 'common.css';
import { CompanySelector, Logo, SortButtons, Ticket, TransferChecks } from 'components';
import styles from './tickets-page.module.css';
import { useTicketState } from '../../store';

export const TicketsPage: React.FC = () => {

  const { tickets, companies, segments } = useTicketState();
  console.log('tickets', tickets);
  console.log('companies', companies);
  console.log('segments', segments);

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