// Default
import React, { Component } from 'react';

import getInitialProps from '../getInitialProps';

// Dashboard components
import Root from '../../root';
import Sidebar from '../../../../components/sidebar';

import styles from './styles.scss';

const withDashboard = WrappedComponent => (
  class extends Component {
    static async getInitialProps (ctx) {
      return { ...await getInitialProps(WrappedComponent, ctx) }
    }

    render () {
      return (
        <Root className={styles.dashboard}>
          <Sidebar />
          <section className={styles.pageContent}>
            <WrappedComponent {...this.props} />
          </section>
        </Root>
      );
    }
  }
);

export default withDashboard;

