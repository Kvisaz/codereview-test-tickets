import { ITicketState } from './interfaces';
import { InitialTicketState } from './state';
import { ActionTicket, ActionTicketType } from './actions';

export function ticketReducer(
  state: ITicketState = InitialTicketState,
  action: ActionTicket,
): ITicketState {
  switch (action.type) {
    case ActionTicketType.SHOW_MORE: {
      console.log('ActionTicketType.SHOW_MORE')
      return {
        ...state,
      };
    }
    case ActionTicketType.SORT: {
      console.log('ActionTicketType.SORT')
      return {
        ...state,
      };
    }
    case ActionTicketType.TRANSFER_SELECT: {
      console.log('ActionTicketType.TRANSFER_SELECT')
      return {
        ...state,
      };
    }
    case ActionTicketType.COMPANY_SELECT: {
      console.log('ActionTicketType.COMPANY_SELECT')
      return {
        ...state,
      };
    }

    default:
      return state;

  }
}