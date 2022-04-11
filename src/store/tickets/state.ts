import { ITicketState, TicketSort } from './interfaces';

export const InitialTicketState: ITicketState = {
  selectedTransfers: {},
  showed: 0,
  sortOrder: TicketSort.CHEAPEST,
  tickets: {},
  companies: {},
  segments: {}
};