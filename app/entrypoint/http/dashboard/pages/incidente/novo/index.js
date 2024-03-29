// Default
import React, { Fragment, Component } from 'react';

// HoC
import { withAuth, withDashboard } from '../../shared/hoc';

// Components
import Breadcrumb from '../../../components/breadcrumb';
import Text from '../../../components/text';
import Form from '../../../components/form';

class Criar extends Component {
  render() {
    return (
      <Fragment>
        <Breadcrumb steps={['Incidente', 'Criar']} />
        <article>
          <Text type="title">Criar incidente</Text>
          <Text>
            Aqui você poderá registrar um novo incidente, que será tratado por algum analista responsável no futuro.
          </Text>
          <Form />
        </article>
      </Fragment>
    );
  }
}


export default withAuth(withDashboard(Criar));
