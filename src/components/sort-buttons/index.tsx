import React from 'react';
import styles from './sort-buttons.module.css';

export interface ISortButtonsProps {

}

export const SortButtons: React.FC<ISortButtonsProps> = () => {
  return (
    <div className={`block ${styles.group} `}>
      <button>Самый дешевый</button>
      <button>Самый быстрый</button>
      <button>Оптимальный</button>
    </div>
  );
};