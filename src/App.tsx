import React, { useEffect } from 'react';
import { TicketsPage } from './pages';
import { requestTickets, useDispatch, useTicketState } from './store';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const { nextTicketAmount, nextTicketOffset } = useTicketState();
  useEffect(() => {
    dispatch(requestTickets(nextTicketAmount, nextTicketOffset));
  }, [dispatch]);
  return (
    <TicketsPage />
  );
};