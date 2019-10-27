import React from 'react';

import styles from './style.scss';

const Button = ({ onClick, children }) => (
  <button className={styles.button}>{children}</button>
);

export default Button;
