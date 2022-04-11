import { ISegment } from '../interfaces';
import { useTicketState } from '../../index';

export function useTicketSegments(ticketId: string): ISegment[] {
  const { tickets, segments } = useTicketState();
  const ticket = tickets[ticketId];
  if (ticket == null) return [];
  return ticket.segments.map(id => segments[id]);
}