import axios from 'axios';
import config from '../../../../../configs/server';

import { getAuthenticationHeaders } from './auth';

// Config
const client = (ctx) => axios.create({
  baseURL: `${config.base}:${config.ports.bff}/api`,
  headers: {
    ...getAuthenticationHeaders(ctx)
  }
});

export default client;
