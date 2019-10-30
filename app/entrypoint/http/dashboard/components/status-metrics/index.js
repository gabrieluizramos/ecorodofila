// Default
import React from 'react';

// Cookie
import cookie from 'js-cookie';

// Components
import Text from '../text';

// Styles
import styles from './styles.scss';

const reduceIncidents = incidentsByPriority => {
  const statuses =  {
    INACTIVE: 0,
    PROCESSED: 0,
    PROCESSING: 0
  };

  const reduced = incidentsByPriority.reduce((acc, inc) => (
    {
      ...acc,
      [inc.status]: (acc[inc.status] + 1)
    }),
    statuses
  );

  return reduced;
};

const StatusMetrics = ({ incidents }) => (
  <section className={styles.metricsContainer}>
    <header>
      <Text type="title">
        Registro dos incidentes até o momento
      </Text>
      <Text>(classificados por prioridade e status)</Text>
      <div className={styles.subtitle}>
        <span>Inativo</span>
        <span>Em tratamento</span>
        <span>Finalizados</span>
      </div>
    </header>
    <ul className={styles.metricsList}>
      {Object.keys(incidents).map((priority, index) =>
      <li className={styles.metricsItem}>
        <div>Prioridade {index + 1} ({incidents[priority].length})</div>
        <div className={styles.metricsBars}>
          <div>{reduceIncidents((incidents[priority])).INACTIVE}</div>
          <div>{reduceIncidents((incidents[priority])).PROCESSING}</div>
          <div>{reduceIncidents((incidents[priority])).PROCESSED}</div>
        </div>
      </li>
      )}
    </ul>
  </section>
);

export default StatusMetrics;
