import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import React from 'react';

import styles from './Loading.module.css';

import Loader from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className={styles.Container}>
      <Loader type='TailSpin' color='#00a1b4' height={120} width={120} />
    </div>
  );
};

export default Loading;
