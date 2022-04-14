import React from 'react';
import { ISegment, ITicket, RequestState, TicketSort, useApiState, useTicketState } from 'store';
import { Ticket, TicketSkeleton } from '../ticket';

export const Tickets: React.FC = () => {
  const { tickets, nextTicketAmount, segments, sortOrder, selectedCompanyId, selectedTransfers } = useTicketState();
  const { ticketsRequestState, error } = useApiState();

  if (ticketsRequestState === RequestState.REJECTED) {
    return (
      <p>
        {error}
      </p>
    );
  }

  const ticketArr = Object.values(tickets);
  const filteredbYCompany = filterCompanies(ticketArr, selectedCompanyId);
  const filteredByTransfers = filteredTransfers(filteredbYCompany, selectedTransfers, segments);

  const sortedTickets = sortTickets(filteredByTransfers, sortOrder, segments);

  const skeletonsAmount = ticketsRequestState === RequestState.PENDING || ticketsRequestState === RequestState.NOT_SETTED ? nextTicketAmount : 0;

  return (
    <>
      {sortedTickets.map(ticket => (<Ticket key={ticket.id} ticket={ticket} />))}
      {
        skeletonsAmount > 0 && Array.from(new Array(skeletonsAmount)).map((_, i) => (<TicketSkeleton key={i} />))
      }
    </>
  );
};

function filterCompanies(tickets: ITicket[], companyId?: string): ITicket[] {
  if (companyId == null) return tickets;
  return tickets.filter(t => t.companyId === companyId);
}

function sortTickets(tickets: ITicket[], order: TicketSort, segments: Record<string, ISegment>): ITicket[] {
  switch (order) {
    case TicketSort.CHEAPEST:
      return getCheapest(tickets);
    case TicketSort.FASTEST:
      return getFastest(tickets, segments);
    case TicketSort.OPTIMAL:
      return getOptimal(tickets, segments);
  }
}

function getCheapest(tickets: ITicket[]): ITicket[] {
  return tickets.sort((a, b) => a.price - b.price);
}

function getFastest(tickets: ITicket[], segments: Record<string, ISegment>): ITicket[] {
  return tickets.sort((a, b) => getTicketTime(a, segments) - getTicketTime(b, segments));
}

function getOptimal(tickets: ITicket[], segments: Record<string, ISegment>): ITicket[] {
  return tickets.sort((a, b) => getTicketPriceTime(a, segments) - getTicketPriceTime(b, segments));
}

function getTicketTime(ticket: ITicket, segments: Record<string, ISegment>): number {
  const segArr = ticket.segments.map(id => segments[id]).sort((a, b) => a.dateStart - b.dateStart);
  return segArr[segArr.length - 1].dateEnd - segArr[0].dateStart;
}

function getTicketPriceTime(ticket: ITicket, segments: Record<string, ISegment>): number {
  return getTicketTime(ticket, segments) * ticket.price;
}

function filteredTransfers(ticketArr: ITicket[], selectedTransfers: Record<number, boolean | null>, segments: Record<string, ISegment>): ITicket[] {
  const nonZeroes = Object.values(selectedTransfers).filter(v => v != null);
  if (nonZeroes.length === 0) return ticketArr;


  return ticketArr.filter(ticket => {
    const ticketTransfers = ticket
      .segments.map(id => segments[id])
      .reduce((acc, next) => acc + next.stops.length, 0);
    return selectedTransfers[ticketTransfers];
  });
}