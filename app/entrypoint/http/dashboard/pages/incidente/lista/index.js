// Default
import React, { Fragment, Component } from 'react';

// HoC
import { withAuth, withDashboard } from '../../shared/hoc';

// Components
import Breadcrumb from '../../../components/breadcrumb';
import Text from '../../../components/text';
import IncidentList from '../../../components/incident-list';

class Lista extends Component {
  static async getInitialProps(ctx) {
    const mock = [
      {
        id: 1,
        name: 'Acidente na via X',
        description: 'Dois carros envolvidos no acidente'
      },
      {
        id: 2,
        name: 'Cachorro perdido na via Y',
        description: 'Um cachorro encontra-se perdido'
      }
    ];

    return {
      incidents: mock
    }
  }

  render() {
    return (
      <Fragment>
        <Breadcrumb steps={['Incidente', 'Lista']} />
        <article>
          <Text type="title">Lista de incidentes</Text>
          <Text>
            Confira a lista de todos os incidentes atribuídos a você até o momento.
          </Text>
          <IncidentList incidents={this.props.incidents} />
        </article>
      </Fragment>
    );
  }
}


export default withAuth(withDashboard(Lista));
