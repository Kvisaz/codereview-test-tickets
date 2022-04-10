import React from 'react';
import { Services } from 'services';
import IMAGE from './logo.svg';
import styles from './logo.module.css';

interface IProps {
}

export const Logo: React.FC<IProps> = () => {
  return (
    <a href='/'>
      <img src={IMAGE} alt={Services.strings.logoTitle} className={styles.logo} />
    </a>
  );
};