import React, { useState } from 'react';
import styles from './sort-buttons.module.css';

export interface ISortButtonsProps {

}

const buttons = [
  { text: 'Самый дешевый' },
  { text: 'Самый быстрый' },
  { text: 'Оптимальный' },
];

export const SortButtons: React.FC<ISortButtonsProps> = () => {

  const [selectedButton, setSelectedButton] = useState(0);

  const onClick = (i: number) => {
    console.log(`${i}`);
    setSelectedButton(i);
  };


  return (
    <div className={`block ${styles.group} `}>
      {buttons.map((props, i) => (
        <button key={i} className={selectedButton === i ? styles.selected : ''}
                onClick={() => onClick(i)}>{props.text}</button>))}
    </div>
  );
};