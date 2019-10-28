// Default
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Next
import Link from 'next/link';

// Components
import Text from '../text';
import Button from '../button';

// Styles
import styles from './styles.scss';

const IncidentList = ({ incidents }) => (
  <Fragment>
    <div className={styles.newIncident}>
      <Link href="/incidente/consultar">
        <Button link>
          Consultar novo incidente
        </Button>
      </Link>
    </div>
    {
      incidents.length ? (
        <ul className={styles.incidentList}>
          {incidents.map(({ name, description, id, status }, index) => (
            <li className={styles.incidentItem} key={`incident-${index}`}>
              <div className={styles.incidentInfo}>
                <div className={styles.incidentText}>
                Nome: {name}
                </div>
                <div className={styles.incidentText}>
                  Ocorrido: {description}
                </div>
                <div className={styles.incidentText}>
                  Status: { status === 'PROCESSED' ? 'Finalizado' : 'Aberto' }
                </div>
                <div className={styles.incidentText}>
                  <Link href={{pathname: '/incidente/visualizar', query: { id }}}>
                    <Button link>
                      { status === 'PROCESSED' ? 'Visualizar' : 'Atuar' }
                    </Button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : <Text>Você ainda não possui nenhum incidente para tratar.</Text>
    }
  </Fragment>
);

IncidentList.defaultProps = {
  incidents: []
};

IncidentList.propTypes = {
  incidents: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string
  }))
}

export default IncidentList;
