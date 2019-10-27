// Default
import React, { Component } from 'react';

// Next
import Router from 'next/router';

// Services
import { logout } from '../../services/auth';

class Logout extends Component {
  componentDidMount() {
    logout();
    Router.push('/')
  }

  render() {
    return null;
  }
}

export default Logout;
