// Page
import { default as Visualizar } from '../visualizar';

// Next
import Router from 'next/router';

// Services
import { assignNewIncident } from '../../../services/incident';

class Consultar extends Visualizar {
  static async getInitialProps (ctx) {
    const incident = await assignNewIncident(ctx);

    return {
      incident
    };
  };

  componentDidMount() {
    Router.push(`/incidente/visualizar?id=${this.props.incident.id}`)
  }

  render() {
    return null;
  }
}

export default Consultar;
