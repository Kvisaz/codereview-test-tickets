import { BACKEND_MOCK_DATA } from '../data';

export class Api {
  async getTickets(amount: number, offset: number) {
    await delay(750); // await
    return BACKEND_MOCK_DATA.TICKETS.slice(offset, offset + amount);
  }
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}