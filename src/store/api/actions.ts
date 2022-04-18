export type ActionApi =
  | { type: ActionApiType.TICKETS_PENDING; }
  | { type: ActionApiType.TICKETS_RESOLVED }
  | { type: ActionApiType.TICKETS_REJECTED, reason: string }
  | { type: ActionApiType.COMPANIES_PENDING }
  | { type: ActionApiType.COMPANIES_RESOLVED }
  | { type: ActionApiType.COMPANIES_REJECTED, reason: string }


export enum ActionApiType {
  TICKETS_PENDING = 'TICKETS_PENDING',
  TICKETS_RESOLVED = 'TICKETS_RESOLVED',
  TICKETS_REJECTED = 'TICKETS_REJECTED',
  COMPANIES_PENDING = 'COMPANIES_PENDING',
  COMPANIES_RESOLVED = 'COMPANIES_RESOLVED',
  COMPANIES_REJECTED = 'COMPANIES_REJECTED',
}