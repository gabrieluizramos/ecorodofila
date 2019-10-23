const consumerGateway = require('../../gateway/consumer/incident');

const handleMessageConsumed = channel => async (message, msg = JSON.parse(message.content.toString())) => {
  console.log('Message received: ', msg)
  await channel.ack(message);
};

const consume = () => consumerGateway.consume(handleMessageConsumed);

module.exports = {
  consume
};
