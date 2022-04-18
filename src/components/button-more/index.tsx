import React from 'react';
import { Services } from 'services';
import { RequestState, requestTickets, useApiState, useDispatch, useTicketState } from 'store';
import styles from './button-more.module.css';
import 'common.css';

export const ButtonMore: React.FC = () => {

  const { ticketsRequestState } = useApiState();
  const { nextTicketAmount, nextTicketOffset } = useTicketState();
  const dispatch = useDispatch();

  if (ticketsRequestState === RequestState.PENDING) return null;

  const onClick = () => {
    dispatch(requestTickets(nextTicketAmount, nextTicketOffset));
  };

  return (
    <button className={`${styles.button} block`} onClick={onClick}>
      {Services.strings.buttonShowMoreLabel.replace('{{1}}', '' + nextTicketAmount)}
    </button>
  );
};