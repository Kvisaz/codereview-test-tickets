import { ITicketState, TicketSort } from './interfaces';

export const InitialTicketState: ITicketState = {
  selectedTransfers: 0,
  showed: 0,
  sortOrder: TicketSort.CHEAPEST,
  tickets: [],
};