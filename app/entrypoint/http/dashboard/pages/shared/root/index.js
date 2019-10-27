import React from 'react';

import styles from './styles.scss';

const Root = ({ children, className = '' }) => {
  const classNames = [
    styles.root,
    className
  ].join(' ');

  return (
    <div className={classNames}>
      {children}
    </div>
  );
}

export default Root;

