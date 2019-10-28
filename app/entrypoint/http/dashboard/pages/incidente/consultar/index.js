// Page
import { default as Visualizar } from '../visualizar';

// Services
import { assignNewIncident } from '../../../services/incident';

class Consultar extends Visualizar {
  static async getInitialProps (ctx) {
    const { incident } = await assignNewIncident(ctx);

    return {
      incident
    };
  };
}

export default Consultar;
