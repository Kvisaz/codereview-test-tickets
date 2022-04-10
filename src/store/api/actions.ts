export type ActionApi =
  | { type: ActionApiType.TICKETS_PENDING; }
  | { type: ActionApiType.TICKETS_RESOLVED }
  | { type: ActionApiType.TICKETS_REJECTED, reason: string }


export enum ActionApiType {
  TICKETS_PENDING = 'TICKETS_PENDING',
  TICKETS_RESOLVED = 'TICKETS_RESOLVED',
  TICKETS_REJECTED = 'TICKETS_REJECTED',
}