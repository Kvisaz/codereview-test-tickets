export enum TicketRequestState {
  NOT_SETTED = 'NOT_SETTED',
  PENDING = 'PENDING',
  RESOLVED = 'RESOLVED',
  REJECTED = 'REJECTED',
}

export interface IApiState {
  ticketsRequestState: TicketRequestState;
  error?: string;
}

