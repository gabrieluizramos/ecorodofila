// Default
import React, { Fragment } from 'react';

// HoC
import { withAuth, withDashboard } from '../shared/hoc';

// Components
import Text from '../../components/text';
import IncidentCount from '../../components/incident-count';

// Services
import { getIncidentsCount } from '../../services/incident';

const Dashboard = ({ incidents }) => (
  <Fragment>
    <title>EcoRodofila - Painel</title>
    <article>
      <Text type="title">Seja bem-vindo(a) ao EcoRodofila!</Text>
      <Text>
        Aqui você poderá registrar novos incidentes ou tratar os que já estiverem registrados.
      </Text>
      <Text>
        Qualquer dúvida ou necessidate, entre em contato com o suporte.
      </Text>
      <IncidentCount incidents={incidents} />
    </article>
  </Fragment>
);

Dashboard.getInitialProps = async ctx => {
  const incidents = await getIncidentsCount(ctx);

  return {
    incidents
  }
};

export default withAuth(withDashboard(Dashboard));
