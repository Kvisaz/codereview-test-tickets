import React  from 'react';
import styles from './sort-buttons.module.css';

export interface ISortButtonsProps {
  selected: number;
  onSelect: (i: number) => void;
  buttons: string[];
}


export const SortButtons: React.FC<ISortButtonsProps> = ({ buttons, selected, onSelect }) => {

  return (
    <div className={`block ${styles.group} `}>
      {buttons.map((text, i) => (
        <button key={i} className={selected === i ? styles.selected : ''}
                onClick={() => onSelect(i)}>{text}</button>))}
    </div>
  );
};