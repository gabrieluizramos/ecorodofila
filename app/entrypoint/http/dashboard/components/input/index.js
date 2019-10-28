// Default
import React, { Fragment } from 'react';

// Components
import Label from '../label';

// Styles
import styles from './styles.scss';

// Tags
const tags = {
  default: 'input',
  textarea: 'textarea'
}

const Input = (props) => {
  const Element = tags[props.type] || tags.default;

  return (
    <Fragment>
      {props.label && (
        <Label for={props.name}>{props.label}</Label>
      )}
      <Element {...props} className={styles.input} />
    </Fragment>
  );
};

export default Input;
