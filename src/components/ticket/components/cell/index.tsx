import React from 'react';
import styles from './cell.module.css';

export interface ICellProps {
  label: string;
  value: string;
}

export const Cell: React.FC<ICellProps> = ({ label, value }) => {
  return (<div className={styles.cell}>
    <div className={styles.label}>{label}</div>
    <div className={styles.value}>{value}</div>
  </div>);
};