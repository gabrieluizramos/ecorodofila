import React from 'react';

import styles from './styles.scss';

const Input = (props) => (
  <input
    className={styles.input}
    {...props}
  />
);

export default Input;
