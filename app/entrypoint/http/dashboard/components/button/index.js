// Default
import React from 'react';

// Styles
import styles from './style.scss';

const tags = {
  link: 'a',
  default: 'button'
};

const Button = (props) => {
  const Tag = tags[props.href ? 'link' : 'default'];

  return (
    <Tag className={styles.button} {...props}>{props.children}</Tag>
  );
};

export default Button;
