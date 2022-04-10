import React, { useState } from 'react';
import 'common.css';
import styles from './tickets.module.css';
import { Logo, SortButtons, Ticket, TransferChecks } from 'components';
import { Services } from '../../services';

interface IProps {

}

export const Tickets: React.FC<IProps> = () => {

  const [selectedButton, setSelectedButton] = useState(0);

  const buttons = [
    Services.strings.ticketSortCheapest,
    Services.strings.ticketSortFastest,
    Services.strings.ticketSortOptimal,
  ];

  const onSortSelect = (i: number) => setSelectedButton(i);

  return (<div className={`page`}>
    <div className={`pageHeader ${styles.logo}`}>
      <Logo />
    </div>
    <div className={`pageContent`}>
      <div className={`pageColumn pageSelectors`}>
        <TransferChecks />
      </div>
      <div className={`pageColumn pageMain`}>
        <SortButtons buttons={buttons} selected={selectedButton} onSelect={onSortSelect} />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </div>
  </div>);
};