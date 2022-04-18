import React, { useEffect } from 'react';
import { TicketsPage } from './pages';
import { requestTickets, useDispatch } from './store';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestTickets(5, 0));
  }, [dispatch]);
  return (
    <TicketsPage />
  );
};