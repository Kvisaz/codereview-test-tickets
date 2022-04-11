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

  const skeletonsAmount = ticketsRequestState === RequestState.PENDING || ticketsRequestState === RequestState.NOT_SETTED ? nextTicketAmount : 0;
  
  return (
    <>
      {Object.values(tickets).map(ticket => (<Ticket key={ticket.id} ticket={ticket} />))}
      {
        skeletonsAmount > 0 && Array.from(new Array(skeletonsAmount)).map((_, i) => (<TicketSkeleton key={i} />))
      }
    </>
  );
};