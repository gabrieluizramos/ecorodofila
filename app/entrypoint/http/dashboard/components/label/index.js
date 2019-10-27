import React from 'react';

import styles from './styles.scss';

const Label = ({ for: _for, children }) => (
  <label htmlFor={_for} className={styles.label}>{ children }</label>
);

export default Label;
