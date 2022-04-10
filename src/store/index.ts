import { combineReducers, createStore } from 'redux';
import { ITicketState, ticketReducer } from './tickets';
import { TypedUseSelectorHook, useDispatch as ReactUseDispatch, useSelector as ReactUseSelector } from 'react-redux';

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
