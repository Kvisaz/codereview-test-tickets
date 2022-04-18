import React from 'react';
import { Services } from 'services';
import IMAGE from './logo.svg';
import styles from './logo.module.css';

export const Logo: React.FC = () => {
  return (
    <a href='/'>
      <img src={IMAGE} alt={Services.strings.logoTitle} className={styles.logo} />
    </a>
  );
};