const { priority: { keywords } } = require('../../configs/queue');

const incidentGateway = require('../../gateway/producer/incident');

const prioritize = ({ description }) => keywords.reduce(
  (priority, word) => description.includes(word) ? priority + 1 : priority,
  0
);

const isValidIncident = ({ name, description, priority = 0 }) => (
  typeof name === 'string' &&
  typeof description === 'string' &&
  typeof priority === 'number'
);

const prioritizeIncidentAndPublish = async incident => {
  incident.priority = prioritize(incident);
  const published = await incidentGateway.publish(incident);

  return published;
};

module.exports = {
  prioritizeIncidentAndPublish,
  isValidIncident
};
