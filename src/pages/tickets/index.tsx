import React from 'react';
import 'common.css';
import { Services } from 'services';
import { ActionTicketType, TicketSort, useDispatch, useTicketState } from 'store';
import { CompanySelector, Logo, SortButtons, Ticket, TransferChecks } from 'components';
import styles from './tickets.module.css';

interface ISortButtonData {
  label: string;
  order: TicketSort;
}

const buttons: ISortButtonData[] = [
  { label: Services.strings.ticketSortCheapest, order: TicketSort.CHEAPEST },
  { label: Services.strings.ticketSortFastest, order: TicketSort.FASTEST },
  { label: Services.strings.ticketSortOptimal, order: TicketSort.OPTIMAL },
];

export const Tickets: React.FC = () => {

  const { tickets, sortOrder } = useTicketState();
  const dispatch = useDispatch();

  console.log('sortOrder', sortOrder);

  const onSortSelect = (i: number) => {
    dispatch({
      type: ActionTicketType.SORT,
      order: buttons[i]?.order ?? TicketSort.FASTEST,
    });
  };

  const getSelectedButtonIndex: number = buttons.findIndex(b => b.order === sortOrder) || 0;

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
        <SortButtons buttons={buttons.map(b => b.label)} selected={getSelectedButtonIndex} onSelect={onSortSelect} />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </div>
  </div>);
};