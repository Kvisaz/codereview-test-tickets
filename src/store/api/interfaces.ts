export enum IRequestState {
  NOT_SETTED = 'NOT_SETTED',
  PENDING = 'PENDING',
  RESOLVED = 'RESOLVED',
  REJECTED = 'REJECTED',
}

export interface IApiState {
  ticketsRequestState: IRequestState;
  companiesRequestState: IRequestState;
  error?: string;
}

