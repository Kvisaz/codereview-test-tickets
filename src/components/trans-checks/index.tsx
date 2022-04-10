import React from 'react';
import { Services } from 'services';
import { SideWidget } from '../side-widget';
import styles from './trans-checks.module.css';

const options: string[] = [
  Services.strings.transferChecksOptionNone,
  Services.strings.transferChecksOption1,
  Services.strings.transferChecksOption2,
  Services.strings.transferChecksOption3,
];

export interface ITransChecksProps {

}

export const TransChecks: React.FC<ITransChecksProps> = () => {
  return (<SideWidget label={Services.strings.transferChecksTitle}>
    {options.map((option, i) => (<label key={i} className={styles.checkBox}><input type='checkbox' />{option}</label>))}
  </SideWidget>);
};