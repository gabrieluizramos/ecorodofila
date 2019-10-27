import axios from 'axios';
import config from '../../../../../configs/server';

import { getAuthenticationHeaders } from './auth';

// Config
const client = axios.create({
  baseURL: `${config.base}:${config.ports.api}/api`,
  headers: {
    ...getAuthenticationHeaders()
  }
});

export default client;
