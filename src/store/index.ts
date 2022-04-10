import { Action, ActionCreator, applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import {
  ActionTicket,
  ActionTicketType,
  CityCodes,
  ICompany,
  ISegment,
  ITicket,
  ITicketState,
  ticketReducer,
  TicketSort,
} from './tickets';

import {
  requestTickets
} from './api'


import { TypedUseSelectorHook, useDispatch as ReactUseDispatch, useSelector as ReactUseSelector } from 'react-redux';
import { ActionApi, apiReducer, IApiState } from './api';

export type {
  ITicket, ActionTicket, ISegment, CityCodes, ICompany, ITicketState,
};

export {
  ActionTicketType,
  TicketSort,
};

export {requestTickets}


const rootReducer = combineReducers({
  tickets: ticketReducer,
  api: apiReducer,
});

export interface IRootState {
  tickets: ITicketState;
  api: IApiState;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk
    ),
  ));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppAction = ActionApi | ActionTicket;


export const useSelector: TypedUseSelectorHook<RootState> = ReactUseSelector;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, AppAction>>;
export const useDispatch = () => ReactUseDispatch<AppDispatch | AppThunk>();


export interface IGetState {
  (): IRootState;
}

export function useTicketState(): ITicketState {
  return useSelector((state: RootState) => ({ ...state.tickets }));
}
