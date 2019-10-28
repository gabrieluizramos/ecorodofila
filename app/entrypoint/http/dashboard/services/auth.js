import cookie from 'js-cookie';
import nextCookie from 'next-cookies';

import client from './config/auth';

export const login = async (email, password) => {
  try {
    const res = await client.post('/login', {email, password});
    const { data: { token, name } } = res;

    client.setCredentials(email, token, name);

    return true;
  } catch (err) {
    throw err;
  }
};

export const isLogged = () => !!cookie.get('token');

export const logout = () => {
  cookie.remove('token');
  cookie.remove('user');
  cookie.remove('name');
  return true;
};

export const validateAuthentication = (ctx, writeHead = true) => {
  const { token } = nextCookie(ctx);

  if (ctx.req && !token && writeHead) {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
    return false;
  }

  if (!token) {
    return false
  }

  return token;
}
