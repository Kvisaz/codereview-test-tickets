import { IApiState, IRequestState } from './interfaces';
import { ActionApi, ActionApiType } from './actions';
import { InitialApiState } from './state';

export function apiReducer(state: IApiState = InitialApiState, action: ActionApi): IApiState {
  switch (action.type) {
    case ActionApiType.TICKETS_PENDING: {
      return {
        ...state,
        ticketsRequestState: IRequestState.PENDING
      };
    }
    case ActionApiType.TICKETS_RESOLVED: {
      return {
        ...state,
        ticketsRequestState: IRequestState.RESOLVED
      };
    }
    case ActionApiType.TICKETS_REJECTED: {
      return {
        ...state,
        ticketsRequestState: IRequestState.REJECTED,
        error: action.reason
      };
    }
    default:
      return state;
  }
}