// Page
import { default as Consultar } from '../visualizar';

// Services
import { assignNewIncident } from '../../../services/incident';

Consultar.getInitialProps = async(ctx) => {
  const { incident } = await assignNewIncident(ctx);

  return {
    incident
  };
};

export default Consultar;
