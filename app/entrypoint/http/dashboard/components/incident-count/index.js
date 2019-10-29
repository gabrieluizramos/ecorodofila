// Default
import React from 'react';

// Components
import Text from '../text';

// Styles
import styles from './styles.scss';

const IncidentCount = ({ incidents }) => (
  <section className={styles.incidentCount}>
    <Text type="title">
      Registro dos incidentes até o momento
      <Text>(classificados por prioridade)</Text>
    </Text>
    <ul className={styles.incidentCount}>
      oi
    </ul>
  </section>
);

export default IncidentCount;
