import React from 'react';
import 'common.css';
import { CompanySelector, Logo, SortButtons, TransferChecks } from 'components';
import styles from './tickets-page.module.css';
import { Tickets } from '../../components/tickets';
import { ButtonMore } from '../../components/button-more';

export const TicketsPage: React.FC = () => {

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
        <Tickets />
        <ButtonMore />
      </div>
    </div>
  </div>);
};