import axios from 'axios';
import config from '../../../../configs/server';

// Config
const client = axios.create({
  baseURL: `${config.base}:${config.ports.bff}/api`
});

// Custom methods
client.formatAuthorizationHeader = (user, token) => `${user}:${token}`;
client.setHeaders = (name, value) => client.defaults.headers[name] = value;

export default client;
