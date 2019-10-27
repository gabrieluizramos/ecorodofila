import React, { Component } from 'react';

// HoC
import { withAuth, withDashboard } from '../../shared/hoc';

const Criar = ({ name }) => (
  <div>ola{name}</div>
);

Criar.getInitialProps = async () => ({
  name: 'heiho'
});

export default withAuth(withDashboard(Criar));
