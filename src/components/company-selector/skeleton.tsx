import React from 'react';
import { Services } from 'services';
import { SideWidget } from '../side-widget';
import styles from './company-selector.module.css';
import 'common.css';

const companies = [
  Services.strings.companyChecksOptionAll,
  'S7 Airlines',
  'XiamenAir',
];

export const CompanySelectorSkeleton: React.FC = () => {

  return (
    <div className={'skeletonBlock'}>
      <SideWidget label={Services.strings.companyChecksTitle}>
        {companies.map((company, i) => (
          <div key={i} className={'skeleton'}>
            <label className={styles.selected}>
              <input type='radio'
                     value={company}
              />{company}
            </label>
          </div>
        ))}
      </SideWidget></div>);
};