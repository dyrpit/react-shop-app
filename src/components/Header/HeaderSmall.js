import React from 'react';
import styles from './Header.module.css';

const HeaderSmall = ({ children }) => {
  return <h2 className={styles.HeaderSmall}>{children}</h2>;
};

export default HeaderSmall;
