import React from 'react';
import { Services } from 'services';
import { SideWidget } from '../side-widget';
import styles from './transfer-checks.module.css';
import { ActionTicketType, useDispatch, useTicketState } from '../../store';

interface ITransferCheckData {
  label: string;
  amount: number;
}

const checkDatas: ITransferCheckData[] = [
  { label: Services.strings.transferChecksOptionNone, amount: 0 },
  { label: Services.strings.transferChecksOption1, amount: 1 },
  { label: Services.strings.transferChecksOption2, amount: 2 },
  { label: Services.strings.transferChecksOption3, amount: 3 },
];

export const TransferChecks: React.FC = () => {

  const { selectedTransfers } = useTicketState();
  const dispatch = useDispatch();
  console.log('selectedTransfers', selectedTransfers);

  const onSelect = (amount: number) => {
    dispatch({
      type: ActionTicketType.TRANSFER_SELECT,
      amount,
    });
  };

  return (<SideWidget label={Services.strings.transferChecksTitle}>
    {checkDatas.map(({ label, amount }, i) => (
      <label key={i} className={selectedTransfers[amount] ? styles.selected : styles.label}>
        <input
          type='checkbox'
          onChange={() => onSelect(amount)}
          checked={selectedTransfers[amount] === true}
        />{label}
      </label>))}
  </SideWidget>);
};