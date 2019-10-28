// Default
import React, { Fragment, Component } from 'react';

// HoC
import { withAuth, withDashboard } from '../../shared/hoc';

// Components
import Breadcrumb from '../../../components/breadcrumb';
import Text from '../../../components/text';
import Form from '../../../components/form';

// Services
import { getAssignedIncident } from '../../../services/incident';

class Visualizar extends Component {
  static async getInitialProps (ctx) {
    const { incident } = await getAssignedIncident(ctx);

    return {
      incident
    };
  }

  render() {
    return (
      <Fragment>
        <Breadcrumb steps={['Incidente', 'Visualizar']} />
        <article>
          <Text type="title">Visualizar incidente</Text>
          <Text>
            Aqui você poderá consultar e tratar as informações sobre um incidente já criado.
          </Text>
          <Form update values={this.props.incident} />
        </article>
      </Fragment>
    );
  }
}


export default withAuth(withDashboard(Visualizar));
