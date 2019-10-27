// Incidents status
const STATUS = {
  INACTIVE: 'INACTIVE',
  PROCESSING: 'PROCESSING',
  PROCESSED: 'PROCESSED'
};

// Simulates a database where users are acting at incidents
const incidents = {
  INACTIVE: [],
  PROCESSING: [],
  PROCESSED: []
};

const saveIncident = incident => {
  incident.status = STATUS.INACTIVE;
  incidents[STATUS.INACTIVE].push(incident);
};

const getUserIncident = user => incidents[STATUS.PROCESSING].find(incident => incident.user === user);

const getNextIncident = user => {
  let incident = getUserIncident(user);

  if (incident) return incident;

  incident = incidents[STATUS.INACTIVE].shift();
  incident.user = user;
  incident.status = STATUS.PROCESSING;

  incidents[STATUS.PROCESSING].push(incident);

  return incident;
};

const closeIncident = user => {
  const incident = getUserIncident(user);
  incident.status = STATUS.PROCESSED;

  incidents[STATUS.PROCESSING] = incidents[STATUS.PROCESSING].filter(incident => incident.user !== user);
  incidents[STATUS.PROCESSED].push(incident);

  return true;
};

const getAllUserIncidents = user => ({
  [STATUS.PROCESSING]: incidents[STATUS.PROCESSING].filter(incident => incident.user === user),
  [STATUS.PROCESSED]: incidents[STATUS.PROCESSED].filter(incident => incident.user === user)
});

module.exports = {
  incidents,
  saveIncident,
  getNextIncident,
  closeIncident,
  getAllUserIncidents
};
