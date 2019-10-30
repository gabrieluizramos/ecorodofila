// Default
import React from 'react';

// Cookie
import cookie from 'js-cookie';

// Components
import Text from '../text';

// Styles
import styles from './styles.scss';

const user = cookie.get('user');

const StatusMetrics = ({ incidents }) => (
  <section className={styles.metricsContainer}>
    <header>
      <Text type="title">
        Registro dos incidentes até o momento
      </Text>
      <Text>(classificados por status)</Text>
    </header>
    <ul className={styles.metricsList}>
      <li className={styles.metricsItem}>
        <span className={styles.count}>{incidents.INACTIVE.length}</span> não tratados
      </li>
      <li className={styles.metricsItem}>
        <span className={styles.count}>{incidents.PROCESSING.length}</span> em tratamento
      </li>
      <li className={styles.metricsItem}>
        <span className={styles.count}>{incidents.PROCESSED.length}</span> finalizados <br />
        <div>
          {incidents.PROCESSED.filter(incident => incident.user === user).length} tratados por você :)
        </div>
      </li>
    </ul>
  </section>
);

export default StatusMetrics;
