import React from 'react';
import styles from './company-selector.module.css';

export interface ICompanyRowProps {
  selectedId?: string | null;
  companyId: string | null;
  companyName: string;
  onSelect: (id: string | null) => void;
}

export const CompanyRow: React.FC<ICompanyRowProps> = ({ selectedId, companyId, companyName, onSelect }) => {
  const isSelected = selectedId === companyId;
  return (<label className={isSelected ? styles.selected : styles.label}>
      <input type='radio'
             checked={isSelected}
             onChange={() => onSelect(companyId)} />{companyName}
    </label>

  );
};