import React from 'react';
import { Services } from 'services';
import { SideWidget } from '../side-widget';
import { ActionTicketType, RequestState, useApiState, useDispatch, useTicketState } from '../../store';
import { CompanySelectorSkeleton } from './skeleton';
import { CompanyRow } from './company-row';

export const CompanySelector: React.FC = () => {

  const { ticketsRequestState } = useApiState();
  const { companies, selectedCompanyId } = useTicketState();
  const dispatch = useDispatch();

  const companiesArr = Object.values(companies);

  const onSelect = (id: string | null) => {
    console.log('select!');
    dispatch({ type: ActionTicketType.COMPANY_SELECT, id });
  };

  if (ticketsRequestState === RequestState.PENDING || ticketsRequestState === RequestState.NOT_SETTED) {
    return (
      <CompanySelectorSkeleton />
    );
  }

  return (<SideWidget label={Services.strings.companyChecksTitle}>
    <CompanyRow selectedId={selectedCompanyId} companyId={null} companyName={Services.strings.companyChecksOptionAll}
                onSelect={onSelect} />
    {companiesArr.map((company, i) => (
      <CompanyRow key={company.id} companyId={company.id} companyName={company.name} onSelect={onSelect} />
    ))}
  </SideWidget>);
};