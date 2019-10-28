// Default
import React, { Fragment, Component } from 'react';

// HoC
import { withAuth, withDashboard } from '../../shared/hoc';

// Components
import Breadcrumb from '../../../components/breadcrumb';
import Text from '../../../components/text';
import IncidentList from '../../../components/incident-list';

// Services
import { getUserIncidents } from '../../../services/incident';

class Lista extends Component {
  static async getInitialProps(ctx) {
    const incidents = await getUserIncidents(ctx);

    return {
      incidents
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
