// Default
import React from 'react';

// HoC
import withAuth from '../shared/hoc/with-auth';

const Dashboard = () => (
  <div>hi</div>
);

export default withAuth(Dashboard);
