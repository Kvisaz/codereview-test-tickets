import { applyMiddleware, combineReducers, createStore } from 'redux';
import {
  ActionTicket,
  ActionTicketType,
  CityCodes,
  Company,
  ITicketState,
  Segment,
  Ticket,
  ticketReducer,
  TicketSort,
} from './tickets';
import { TypedUseSelectorHook, useDispatch as ReactUseDispatch, useSelector as ReactUseSelector } from 'react-redux';

export type {
 Ticket, ActionTicket,Segment, CityCodes, Company, ITicketState,
};

export {
  ActionTicketType,
  TicketSort,
}

const rootReducer = combineReducers({
  tickets: ticketReducer,
});

export interface IRootState {
  tickets: ITicketState;
}

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;


export const useSelector: TypedUseSelectorHook<RootState> = ReactUseSelector;
export const useDispatch = () => ReactUseDispatch<AppDispatch>();    // <AppDispatch | AppThunk>


export function useTicketState(): ITicketState {
  return useSelector((state: RootState) => ({ ...state.tickets }));
}
