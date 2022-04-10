import { ITicket, TicketSort } from './interfaces';

export type ActionTicket =
  | { type: ActionTicketType.SORT; order: TicketSort }
  | { type: ActionTicketType.SHOW_MORE; }
  | { type: ActionTicketType.TRANSFER_SELECT; amount: number }
  | { type: ActionTicketType.COMPANY_SELECT; id?: string }
  | { type: ActionTicketType.TICKETS_ADDED; tickets: Record<string, ITicket> }

export enum ActionTicketType {
  SORT = 'SORT',
  TRANSFER_SELECT = 'TRANSFER_SELECT',
  COMPANY_SELECT = 'COMPANY_SELECT',
  SHOW_MORE = 'SHOW_MORE',
  TICKETS_ADDED = 'TICKETS_ADDED'
}
