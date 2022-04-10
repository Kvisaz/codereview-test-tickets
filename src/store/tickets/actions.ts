import { TicketSort } from './interfaces';

/**
 * Actions - это просто перечисления команд для Redux в формате объектов
 *
 * каждый объект содержит обязательное поле type
 * остальные поля не обязательны и произвольны, используются для передачи данных
 */
export type ActionTicket =
  | { type: ActionTicketType.SORT; order: TicketSort }
  | { type: ActionTicketType.SHOW_MORE; }
  | { type: ActionTicketType.TRANSFER_SELECT; amount: number }
  | { type: ActionTicketType.COMPANY_SELECT; id?: string }


/**
 * это типы Action
 */
export enum ActionTicketType {
  SORT = 'SORT',
  TRANSFER_SELECT = 'TRANSFER_SELECT',
  COMPANY_SELECT = 'COMPANY_SELECT',
  SHOW_MORE = 'SHOW_MORE'
}
