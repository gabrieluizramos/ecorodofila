// Default
import React, { Fragment, Component } from 'react';

// Styles
import styles from './styles.scss';

import getInitialProps from '../getInitialProps';

const withSnackbar = WrappedComponent => class extends Component {
  static async getInitialProps (ctx) {
    return { ...await getInitialProps(WrappedComponent, ctx) }
  }

  constructor(props) {
    super(props);

    this.state = {
      active: false,
      type: 'default'
    };

    this.setSnackbar = this.setSnackbar.bind(this);
    this.clearSnackbar = this.clearSnackbar.bind(this);
    this.timeout = 0;
  }

  setSnackbar({ type = 'default', message }) {
    this.setState({
      active: true,
      type,
      message
    }, this.clearSnackbar);
  }

  clearSnackbar() {
    if (this.timeout) clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.setState({
        active: false
      }, this.clearSnackbar);
    }, 3000);
  }

  render() {
    const { active, type, message } = this.state;

    return (
      <Fragment>
        <WrappedComponent {...this.props} setSnackbar={this.setSnackbar} />
        <div className={styles.snackbarContainer}>
          <div className={`${styles.snackbar} ${styles[type]} ${active ? styles.snackbarActive : ''}`}>
            {message}
          </div>
        </div>
      </Fragment>
    );
  }
};

export default withSnackbar;
