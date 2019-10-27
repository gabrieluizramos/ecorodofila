import React, { Component } from 'react';

import { validateAuthentication } from '../../../services/auth';

const withAuth = WrappedComponent => (
  class extends Component {
    static async getInitialProps (ctx) {
      const token = validateAuthentication(ctx)

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx))

      return { ...componentProps, token }
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }
);

export default withAuth;
