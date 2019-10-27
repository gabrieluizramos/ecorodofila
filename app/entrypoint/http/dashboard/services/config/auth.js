import axios from 'axios';
import cookie from 'js-cookie';

import config from '../../../../../configs/server';

// Config
const client = axios.create({
  baseURL: `${config.base}:${config.ports.bff}/api`
});

// Custom methods
const AUTHORIZATION = 'Authorization';

client.formatAuthorizationHeader = (user, token) => `${user}:${token}`;
client.setHeaders = (name, value) => client.defaults.headers[name] = value;

client.setCredentials = (user, token, name) => {
  client.setHeaders(
    AUTHORIZATION,
    client.formatAuthorizationHeader(user, token)
  );

  cookie.set('token', token, { expires: 1 });
  cookie.set('user', user, { expires: 1 });
  cookie.set('name', name, { expires: 1 });
};

export const getAuthenticationHeaders = () => ({
  [AUTHORIZATION]: client.formatAuthorizationHeader(
    cookie.get('user'),
    cookie.get('token'),
  )
});

export default client;
