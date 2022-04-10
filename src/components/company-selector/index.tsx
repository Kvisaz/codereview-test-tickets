import React, { useState } from 'react';
import { Services } from 'services';
import { SideWidget } from '../side-widget';
import styles from './company-selector.module.css';

const companies = [
  Services.strings.companyChecksOptionAll,
  'S7 Airlines',
  'XiamenAir',
];

export interface ICompanySelectorProps {

}

export const CompanySelector: React.FC<ICompanySelectorProps> = () => {

  const [selected, setSelected] = useState(0);

  const onSelect = (i: number) => {
    setSelected(i);
    console.log('select!');
  };

  return (<SideWidget label={Services.strings.companyChecksTitle}>
    {companies.map((company, i) => (
      <label key={i} className={selected === i ? styles.selected : styles.label}>
        <input type='radio'
               value={company}
               checked={selected === i}
               onChange={() => onSelect(i)} />{company}
      </label>
    ))}
  </SideWidget>);
};