import { Services } from 'services';
import { ActionTicketType, ICompany, ISegment, ITicket, store } from 'store';
import { RequestState } from './interfaces';
import { ActionApiType } from './actions';

export const requestTickets = (amount: number, offset: number) => async () => {
  try {
    if (store.getState().api.ticketsRequestState === RequestState.PENDING) return;

    const { segments: oldSegments, companies: oldCompanies, nextTicketOffset } = store.getState().tickets;

    store.dispatch({ type: ActionApiType.TICKETS_PENDING });
    // 1. get tickets
    const tickets = await Services.api.getTickets(amount, offset);
    const ticketRecord: Record<string, ITicket> = {};

    // 2. collect new info
    const newSegments: Set<string> = new Set<string>();
    const newCompanies: Set<string> = new Set<string>();

    tickets.forEach(t => {

      // 2.1 - normalize tickets
      ticketRecord[t.id] = t;

      // 2.2 - collect new segments
      t.segments.forEach(id => {
        if (oldSegments[id] == null) {
          newSegments.add(id);
        }
      });

      // 2.3 - collect new companies
      if (oldCompanies[t.companyId] == null) {
        newCompanies.add(t.companyId);
      }
    });
    const [companies, segments] = await Promise.all([
      Services.api.getCompanies(Array.from(newCompanies)),
      Services.api.getSegments(Array.from(newSegments)),
    ]);

    const companiesRecord: Record<string, ICompany> = {};
    companies.forEach(c => companiesRecord[c.id] = c);

    const segmentsRecord: Record<string, ISegment> = {};
    segments.forEach(c => segmentsRecord[c.id] = c);

    store.dispatch({
      type: ActionTicketType.TICKETS_ADDED,
      tickets: ticketRecord,
      segments: segmentsRecord,
      companies: companiesRecord,
      nextTicketsOffset: nextTicketOffset + amount,
    });

    store.dispatch({ type: ActionApiType.TICKETS_RESOLVED });
  } catch (e: any) {
    store.dispatch({ type: ActionApiType.TICKETS_REJECTED, reason: e.toString() });
  }
};