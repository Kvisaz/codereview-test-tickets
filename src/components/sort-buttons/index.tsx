import React from 'react';
import styles from './sort-buttons.module.css';
import { Services } from '../../services';
import { ActionTicketType, TicketSort, useDispatch, useTicketState } from '../../store';

interface ISortButtonData {
  label: string;
  order: TicketSort;
}

const buttons: ISortButtonData[] = [
  { label: Services.strings.ticketSortCheapest, order: TicketSort.CHEAPEST },
  { label: Services.strings.ticketSortFastest, order: TicketSort.FASTEST },
  { label: Services.strings.ticketSortOptimal, order: TicketSort.OPTIMAL },
];

export const SortButtons: React.FC = () => {

  const { sortOrder } = useTicketState();
  const dispatch = useDispatch();

  const onSelect = (i: number) => {
    dispatch({
      type: ActionTicketType.SORT,
      order: buttons[i]?.order ?? TicketSort.FASTEST,
    });
  };
  
  return (
    <div className={`block ${styles.group} `}>
      {buttons.map(({ order, label }, i) => (
        <button key={i} className={order === sortOrder ? styles.selected : ''}
                onClick={() => onSelect(i)}>{label}</button>))}
    </div>
  );
};