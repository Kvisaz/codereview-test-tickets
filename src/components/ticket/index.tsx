import React from 'react';
import { ISegment, ITicket, useTicketState } from 'store';
import { getCompanyLogoSrc, TicketSkeleton } from './components';
import styles from './ticket.module.css';
import { useTicketSegments } from 'store/tickets';
import { Segment } from './components/segment';

export interface ITicketProps {
  ticket: ITicket,
}

export const Ticket: React.FC<ITicketProps> = ({ ticket }) => {

  const { companies, selectedTransfers } = useTicketState();
  const ticketSegments = useTicketSegments(ticket.id);
  const filteredByTransfers = filterTransfers(ticketSegments, selectedTransfers);
  const logoSrc = getCompanyLogoSrc(companies[ticket.companyId]);

  if (filteredByTransfers.length === 0) return null;

  return (
    <div className={`block ${styles.ticket}`}>
      <div className={styles.header}>
        <div className={styles.price}>{formatPrice(ticket.price)} Р</div>
        {logoSrc.length > 0 ? (
          <img src={logoSrc} className={styles.logo} alt={'company'} />
        ) : (<div className={styles.logo}>
        </div>)}
      </div>
      <div className={styles.cells}>
        {filteredByTransfers.map((segment) => <Segment key={segment.id} segment={segment} />)}
      </div>
    </div>
  );
};

export { TicketSkeleton };

function formatPrice(price: number): string {
  return `${price}`.split('').reverse().map((el, index) => index % 3 !== 2 ? el : ` ${el}`).reverse().join('');
}


function filterTransfers(segments: ISegment[], selectedTransfers: Record<number, boolean | null>): ISegment[] {
  const nonZeroes = Object.values(selectedTransfers).filter(v => v != null);
  if (nonZeroes.length === 0) return segments;
  return segments.filter(t => selectedTransfers[t.stops.length] != null);
}