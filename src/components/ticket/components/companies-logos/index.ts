import S7 from './s7-logo.png';
import Xiamen from './xiamen-air-logo.png';
import { ICompany } from 'store';

export const CompaniesLogos = {
  S7,
  Xiamen,
};

export function getCompanyLogoSrc(company: ICompany): string {
  switch (company.name) {
    case 'S7 Airlines':
      return CompaniesLogos.S7;
    case 'XiamenAir':
      return CompaniesLogos.Xiamen;
    default:
      return '';
  }
}