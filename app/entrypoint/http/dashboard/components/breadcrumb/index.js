// Default
import React from 'react';

// Styles
import styles from './styles.scss';

const Breadcrumb = ({ steps }) => (
  <ol className={styles.breadcrumbContainer}>
    {steps.map((step, index) => (
      <li className={styles.breadcrumbItem} key={`breadcrumb-${index}`}>{step}</li>
    ))}
  </ol>
);

export default Breadcrumb;
