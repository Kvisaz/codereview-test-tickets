export enum RequestState {
  NOT_SETTED = 'NOT_SETTED',
  PENDING = 'PENDING',
  RESOLVED = 'RESOLVED',
  REJECTED = 'REJECTED',
}

export interface IApiState {
  ticketsRequestState: RequestState;
  error?: string;
}

