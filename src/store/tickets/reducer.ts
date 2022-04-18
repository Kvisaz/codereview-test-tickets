import { ITicketState } from './interfaces';
import { InitialTicketState } from './state';
import { ActionTicket, ActionTicketType } from './actions';

export function ticketReducer(
  state: ITicketState = InitialTicketState,
  action: ActionTicket,
): ITicketState {
  switch (action.type) {
    case ActionTicketType.SHOW_MORE: {
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
      return {
        ...state,
        selectedTransfers: {
          ...state.selectedTransfers,
          [action.amount]: state.selectedTransfers[action.amount] ? null : true,
        },
      };
    }
    case ActionTicketType.COMPANY_SELECT: {
      return {
        ...state,
        selectedCompanyId: action.id,
      };
    }

    case ActionTicketType.TICKETS_ADDED: {
      return {
        ...state,
        tickets: {
          ...state.tickets,
          ...action.tickets,
        },
        companies: {
          ...state.companies,
          ...action.companies,
        },
        segments: {
          ...state.segments,
          ...action.segments,
        },
        nextTicketOffset: action.nextTicketsOffset,
      };
    }

    default:
      return state;

  }
}