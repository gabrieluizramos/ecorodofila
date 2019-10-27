import Router from 'next/router';
import cookie from 'js-cookie';
import nextCookie from 'next-cookies';

import client from './config/incident';

export const createIncident = async (name, description) => {
  const a = await client.post('/incident', {
    incident: {
      name,
      description
    }
  });
  console.log(a);
}
