import React, { useState } from 'react';
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
  const [selected, setSelected] = useState<Record<number, boolean | null>>({});

  const onSelect = (i: number) => {
    setSelected({
      ...selected,
      [i]: selected[i] == null ? true : null,
    });
    console.log('select!');
  };

  return (<SideWidget label={Services.strings.transferChecksTitle}>
    {options.map((option, i) => (
      <label key={i} className={selected[i] != null ? styles.selected : styles.label}>
        <input
          type='checkbox'
          onChange={() => onSelect(i)}
          checked={selected[i] != null}
        />{option}
      </label>))}
  </SideWidget>);
};