import Router from 'next/router';
import cookie from 'js-cookie';
import nextCookie from 'next-cookies';

import client from './config';

export const login = async (email, password) => {
  try {
    const res = await client.post('/login', {email, password});
    const { data: { token } } = res;

    client.setHeaders(
      'Authorization',
      client.formatAuthorizationHeader(email, token)
    );

    cookie.set('token', token, { expires: 1 });
    Router.push('/dashboard');

    return true;
  } catch (err) {
    console.log(err);
  }

  return false;
};

export const logout = () => {
  cookie.remove('token');
  Router.push('/')
};

export const validateAuthentication = ctx => {
  const { token } = nextCookie(ctx);

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/' })
    ctx.res.end()
    return
  }

  if (!token) {
    Router.push('/')
  }

  return token;
}
