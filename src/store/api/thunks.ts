import { Services } from 'services';
import { ActionTicketType, ITicket, store } from 'store';
import { TicketRequestState } from './interfaces';
import { ActionApiType } from './actions';

export const requestTickets = (amount: number, offset: number) => async () => {
  console.log('requestTickets', amount, offset);
  try {
    if (store.getState().api.ticketsRequestState === TicketRequestState.PENDING) return;
    store.dispatch({ type: ActionApiType.TICKETS_PENDING });
    const tickets = await Services.api.getTickets(amount, offset);
    store.dispatch({ type: ActionApiType.TICKETS_RESOLVED });

    const ticketRecord: Record<string, ITicket> = {};
    tickets.forEach(t => ticketRecord[t.id] = t);

    store.dispatch({ type: ActionTicketType.TICKETS_ADDED, tickets: ticketRecord });
  } catch (e: any) {
    store.dispatch({ type: ActionApiType.TICKETS_REJECTED, reason: e.toString() });
  }
};