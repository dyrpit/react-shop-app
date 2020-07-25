import React from 'react';
import styles from './Header.module.css';

const HeaderBig = ({ children }) => {
  return <h1 className={styles.HeaderBig}>{children}</h1>;
};

export default HeaderBig;
