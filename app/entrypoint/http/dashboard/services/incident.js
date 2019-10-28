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

export const getUserIncidents = async (ctx) => {
  const incidentClient = client(ctx);
  const req = await incidentClient.get(`/incident`);

  return {
    incidents: req.data.PROCESSING
  }
};
