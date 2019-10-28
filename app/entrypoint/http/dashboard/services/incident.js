import Router from 'next/router';
import cookie from 'js-cookie';
import nextCookie from 'next-cookies';

import client from './config/incident';

export const createIncident = async (name, description, observations = '') => {
  const incidentClient = client();

  try {
    await incidentClient.post('/incident', { incident: { name, description, observations } });
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export const assignNewIncident = async (ctx) => {
  const incidentClient = client(ctx);
  const { data } = await incidentClient.post('/incident/assign');

  return {
    incident: data.incident
  };
};

export const getAssignedIncident = async (ctx) => {
  const incidentClient = client(ctx);
  const { data } = await incidentClient.get(`/incident/${ctx.query.id}`);

  return {
    incident: data.incident
  };
};

export const getUserIncidents = async (ctx) => {
  const incidentClient = client(ctx);
  const { data } = await incidentClient.get('/incident');

  return {
    incidents: data.incident
  }
};
