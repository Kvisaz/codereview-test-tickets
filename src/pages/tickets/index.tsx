import React, { useState } from 'react';
import 'common.css';
import styles from './tickets.module.css';
import { Logo, SortButtons, Ticket } from 'components';

interface IProps {

}

export const Tickets: React.FC<IProps> = () => {

  const [selectedButton, setSelectedButton] = useState(0);

  const buttons = [
    'Самый дешевый',
    'Самый быстрый',
    'Оптимальный',
  ];

  const onSortSelect = (i: number) => setSelectedButton(i);

  return (<div className={`page`}>
    <div className={`pageHeader ${styles.logo}`}>
      <Logo />
    </div>
    <div className={`pageContent`}>
      <div className={`pageColumn pageSelectors`}>
        dd
      </div>
      <div className={`pageColumn pageMain`}>
        <SortButtons buttons={buttons} selected={selectedButton} onSelect={onSortSelect} />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </div>
  </div>);
};