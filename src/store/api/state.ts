import { IApiState, IRequestState } from './interfaces';

export const InitialApiState: IApiState = {
  ticketsRequestState: IRequestState.NOT_SETTED,
  companiesRequestState: IRequestState.NOT_SETTED
};