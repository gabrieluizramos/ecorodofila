// Default
import React from 'react';

// Styles
import styles from './styles.scss';

// Allowed types
const types = {
  title: 'h1',
  default: 'p'
};

const Text = ({ type = 'default', children }) => {
  const Tag = types[type];
  const classNames = `${styles.text} ${styles[type]}`;

  return <Tag className={classNames}>{children}</Tag>
};

export default Text;
