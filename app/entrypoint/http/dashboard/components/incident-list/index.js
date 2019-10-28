// Default
import React from 'react';
import PropTypes from 'prop-types';

// Next
import Link from 'next/link';

// Components
import Text from '../text';
import Button from '../button';

// Styles
import styles from './styles.scss';

const IncidentList = ({ incidents }) => (
  incidents.length ? (
    <ul className={styles.incidentList}>
      {incidents.map(({ name, description, id }, index) => (
        <li className={styles.incidentItem} key={`incident-${index}`}>
          <div className={styles.incidentInfo}>
            <div className={styles.incidentText}>
             Nome: {name}
            </div>
            <div className={styles.incidentText}>
              Ocorrido: {description}
            </div>
            <Link href={{pathname: '/incidente/visualizar', query: { id }}}>
              <Button link>
                Atuar
              </Button>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  ) : <Text>Você ainda não possui nenhum incidente para tratar.</Text>
);

IncidentList.defaultProps = {
  incidents: []
};

IncidentList.propTypes = {
  incidents: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string
  }))
}

export default IncidentList;
