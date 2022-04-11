import React from 'react';
import { RequestState, useApiState, useTicketState } from 'store';
import { Ticket, TicketSkeleton } from '../ticket';

export const Tickets: React.FC = () => {
  const { tickets, nextTicketAmount } = useTicketState();
  const { ticketsRequestState, error } = useApiState();

  console.log('ticketsRequestState', ticketsRequestState);

  if (ticketsRequestState === RequestState.REJECTED) {
    return (
      <p>
        {error}
      </p>
    );
  }

  if (ticketsRequestState === RequestState.PENDING || ticketsRequestState === RequestState.NOT_SETTED) {
    const arr = Array.from(new Array(nextTicketAmount));
    return (
      <>
        {arr.map((_, i) => {
          return (<TicketSkeleton key={i} />);
        })
        }
      </>
    );
  }

  return (
    <>
      {Object.values(tickets).map(ticket => (<Ticket key={ticket.id} ticket={ticket} />))}
    </>
  );
};