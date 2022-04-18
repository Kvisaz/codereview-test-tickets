import { createSelector } from 'reselect';
import { ISegment, ITicketState } from '../interfaces';
import { useTicketState } from '../../index';

const selectTickets = (state: ITicketState) => state.tickets;
const selectSegments = (state: ITicketState) => state.segments;
const selectTicketId = (state: ITicketState, ticketId: string) => ticketId;

export const selectTicketSegments: (state: ITicketState, ticketId: string) => ISegment[] = createSelector([selectTickets, selectSegments, selectTicketId], (
    tickets,
    segments,
    ticketId,
  ) => tickets[ticketId]?.segments.map(id => segments[id]) ?? [],
);

export function useTicketSegments(ticketId: string): ISegment[] {
  const state = useTicketState();
  return selectTicketSegments(state, ticketId);
}

