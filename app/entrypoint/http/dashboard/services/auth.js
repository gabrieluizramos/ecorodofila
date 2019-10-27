import cookie from 'js-cookie';
import nextCookie from 'next-cookies';

import client from './config/auth';

export const login = async (email, password) => {
  try {
    const res = await client.post('/login', {email, password});
    const { data: { token } } = res;

    client.setCredentials(email, token);

    return true;
  } catch (err) {
    throw err;
  }

  return false;
};

export const logout = () => {
  cookie.remove('token');
  return true;
};

export const validateAuthentication = ctx => {
  const { token } = nextCookie(ctx);

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
    return false;
  }

  if (!token) {
    return false
  }

  return token;
}
