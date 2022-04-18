import { BackendTypes } from '../../services/data';

export enum TicketSort {
  CHEAPEST = 'CHEAPEST',
  FASTEST = 'FASTEST',
  OPTIMAL = 'OPTIMAL'
}

/**
 * ре-экспорт бэковых интерфейсов - просто прием,
 * который позволяет отделить интерфейсы удобные для бэка
 * от интерфейсов удобных для нас
 * возможно все будет хорошо и с исходными интерфейсами,
 * но предусмотреть надо сразу
 *
 * в рабочем проекте между ответам бэка и нашими интерфейсами
 * можно вставить не только конверторы, но и guards - защитные шлюзы-конверторы данных
 * от невалидных ответов с бэка
 */
export interface ICompany extends BackendTypes.Company {
}

export interface ITicket extends BackendTypes.Ticket {
}

export interface ISegment extends BackendTypes.Segment {
}

export type CityCodes = BackendTypes.CityCodes;

export interface ITicketState {
  sortOrder: TicketSort;
  selectedTransfers: Record<number, boolean | null>;
  selectedCompanyId?: string;
  tickets: Record<string, ITicket>;
  segments: Record<string, ISegment>;
  showed: number;
  companies: Record<string, ICompany>;
  nextTicketAmount: number;
  nextTicketOffset: number;
  origin: CityCodes;
  destination: CityCodes;
}