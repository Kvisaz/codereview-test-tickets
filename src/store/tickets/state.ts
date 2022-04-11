import { ITicketState, TicketSort } from './interfaces';

export const InitialTicketState: ITicketState = {
  selectedTransfers: {},
  showed: 0,
  sortOrder: TicketSort.CHEAPEST,
  tickets: {},
  companies: {},
  segments: {},
  nextTicketAmount: 3,
  nextTicketOffset: 0
};