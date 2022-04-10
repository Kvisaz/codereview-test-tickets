import { ITicketState } from './interfaces';
import { InitialTicketState } from './state';
import { ActionTicket, ActionTicketType } from './actions';

export function ticketReducer(
  state: ITicketState = InitialTicketState,
  action: ActionTicket,
): ITicketState {
  switch (action.type) {
    case ActionTicketType.SHOW_MORE: {
      console.log('ActionTicketType.SHOW_MORE');
      return {
        ...state,
      };
    }
    case ActionTicketType.SORT: {
      return {
        ...state,
        sortOrder: action.order,
      };
    }
    case ActionTicketType.TRANSFER_SELECT: {
      console.log('ActionTicketType.TRANSFER_SELECT');
      return {
        ...state,
        selectedTransfers: {
          ...state.selectedTransfers,
          [action.amount]: state.selectedTransfers[action.amount] ? null : true,
        },
      };
    }
    case ActionTicketType.COMPANY_SELECT: {
      console.log('ActionTicketType.COMPANY_SELECT');
      return {
        ...state,
      };
    }

    case ActionTicketType.TICKETS_ADDED: {
      console.log('ActionTicketType.TICKETS_ADDED');
      return {
        ...state,
        tickets: {
          ...state.tickets,
          ...action.tickets,
        },
      };
    }

    default:
      return state;

  }
}