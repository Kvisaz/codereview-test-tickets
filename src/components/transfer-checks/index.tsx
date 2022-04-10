import React from 'react';
import { Services } from 'services';
import { SideWidget } from '../side-widget';
import styles from './transfer-checks.module.css';

const options: string[] = [
  Services.strings.transferChecksOptionNone,
  Services.strings.transferChecksOption1,
  Services.strings.transferChecksOption2,
  Services.strings.transferChecksOption3,
];

export interface ITransferChecksProps {

}

export const TransferChecks: React.FC<ITransferChecksProps> = () => {
  return (<SideWidget label={Services.strings.transferChecksTitle}>
    {options.map((option, i) => (<label key={i} className={styles.checkBox}><input type='checkbox' />{option}</label>))}
  </SideWidget>);
};