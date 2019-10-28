// Unique id
const generateId = require('uniqid');

// Incidents status
const STATUS = {
  INACTIVE: 'INACTIVE',
  PROCESSING: 'PROCESSING',
  PROCESSED: 'PROCESSED'
};

// Simulates a database where users are acting at incidents
const incidents = require('./fakedb');

const formatIncidents = incidents =>
  incidents
  .PROCESSING.map(incident => ({...incident, status: 'PROCESSING'}))
  .concat(incidents.PROCESSED.map(incident => ({ ...incident, status: 'PROCESSED' })));

const saveIncident = incident => {
  incident.id = generateId();
  incident.status = STATUS.INACTIVE;

  console.log('Saved incident', incident);

  incidents[STATUS.INACTIVE].push(incident);
};

const getProcessingIncidents = user => incidents[STATUS.PROCESSING].find(incident => incident.user === user);

const getNextIncident = user => {
  let incident = getProcessingIncidents(user);

  if (incident) return incident;

  incident = incidents[STATUS.INACTIVE].shift();
  incident.user = user;
  incident.status = STATUS.PROCESSING;

  incidents[STATUS.PROCESSING].push(incident);

  return incident;
};

const closeIncident = user => {
  const incident = getProcessingIncidents(user);
  incident.status = STATUS.PROCESSED;

  incidents[STATUS.PROCESSING] = incidents[STATUS.PROCESSING].filter(incident => incident.user !== user);
  incidents[STATUS.PROCESSED].push(incident);

  return true;
};

const getAllUserIncidents = user => formatIncidents({
  [STATUS.PROCESSING]: incidents[STATUS.PROCESSING].filter(incident => incident.user === user) || [],
  [STATUS.PROCESSED]: incidents[STATUS.PROCESSED].filter(incident => incident.user === user) || []
});

const getUserIncidentById = (user, id) => {
  const incidents = getAllUserIncidents(user);
  const incident = incidents.find(incident => incident.id === id);

  return incident;
};

module.exports = {
  incidents,
  saveIncident,
  getNextIncident,
  closeIncident,
  getAllUserIncidents,
  getUserIncidentById
};
