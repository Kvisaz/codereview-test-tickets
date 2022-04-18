import { BACKEND_MOCK_DATA, BackendTypes } from '../data';

export class Api {
  async getTickets(amount: number, offset: number): Promise<BackendTypes.Ticket[]> {
    await delay(750); // await
    return BACKEND_MOCK_DATA.TICKETS.slice(offset, offset + amount);
  }

  async getCompanies(ids: string[]): Promise<BackendTypes.Company[]> {
    await delay(750); // await
    const companies = [...BACKEND_MOCK_DATA.COMPANIES] as BackendTypes.Company[];
    return companies.filter(s => ids.indexOf(s.id) > -1);
  }

  /**
   * массив сегментов выглядит огромным
   * похоже, что у бэка должна быть ручка, чтобы дергать конкретные id сегментов
   */
  async getSegments(ids: string[]): Promise<BackendTypes.Segment[]> {
    await delay(750); // await
    const segments = [...BACKEND_MOCK_DATA.SEGMENTS] as BackendTypes.Segment[];
    return segments.filter(s => ids.indexOf(s.id) > -1);
  }
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}