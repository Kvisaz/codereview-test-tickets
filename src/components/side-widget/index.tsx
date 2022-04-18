import React from 'react';
import styles from './side-widget.module.css';

export interface ISideWidgetProps {
  label?: string;
  children: React.ReactNode;
}

export const SideWidget: React.FC<ISideWidgetProps> = ({ label, children }) => {
  return (
    <div className={`block ${styles.sideWidget}`}>
      {label && (<div className={styles.label}>{label}</div>)}
      {children}
    </div>
  );
};