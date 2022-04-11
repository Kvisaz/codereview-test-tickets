import React from 'react';
import { ITicket } from 'store';
import { CompaniesLogos, TicketSkeleton } from './components';
import styles from './ticket.module.css';
import { useTicketSegments } from 'store/tickets';
import { Segment } from './components/segment';

export interface ITicketProps {
  ticket: ITicket,
}

export const Ticket: React.FC<ITicketProps> = ({ ticket }) => {

  const ticketSegments = useTicketSegments(ticket.id);

  console.log('ticket', ticket);


  return (
    <div className={`block ${styles.ticket}`}>
      <div className={styles.header}>
        <div className={styles.price}>{formatPrice(ticket.price)} Р</div>
        <img src={CompaniesLogos.S7} className={styles.logo} alt={'company'} />
      </div>
      <div className={styles.cells}>
        {ticketSegments.map((segment) => <Segment key={segment.id} segment={segment} />)}
      </div>
    </div>
  );
};

export { TicketSkeleton };

function formatPrice(price: number): string {
  return `${price}`.split('').reverse().map((el, index) => index % 3 !== 2 ? el : ` ${el}`).reverse().join('');
}