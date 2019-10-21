exports.isValidIncident = ({ name, description, priority = 0 }) => (
  typeof name === 'string' &&
  typeof description === 'string' &&
  typeof priority === 'number'
);
