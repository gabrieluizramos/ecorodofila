const { priority: { keywords } } = require('../../config/queues');

const prioritize = ({ description }) => keywords.reduce(
  (priority, word) => description.includes(word) ? priority + 1 : priority,
  0
);

module.exports = {
  prioritize
};
