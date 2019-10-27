import React, { Component } from 'react';

import Router from 'next/router';

import getInitialProps from '../getInitialProps';
import { validateAuthentication } from '../../../../services/auth';

const withAuth = WrappedComponent => (
  class extends Component {
    static async getInitialProps (ctx) {
      const token = validateAuthentication(ctx)
      if (!token) Router.push('/');

      return { ...await getInitialProps(WrappedComponent, ctx), token }
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }
);

export default withAuth;
