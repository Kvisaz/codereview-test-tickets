import React, { useEffect } from 'react';
import { Tickets } from './pages';
import { useDispatch, requestTickets } from './store';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(requestTickets(5,0))
  }, [dispatch])
  return (
    <Tickets />
  );
};