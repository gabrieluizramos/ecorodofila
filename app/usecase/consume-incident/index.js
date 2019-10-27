const consumerGateway = require('../../gateway/consumer/incident');

const handleMessageConsumed = channel => async (message, msg = JSON.parse(message.content.toString())) => {
  try {
    const res = await consumerGateway.sendIncidentToBff(msg);
    await channel.ack(message);
  } catch (err) {
    console.log(err);
  }
};

const consume = () => consumerGateway.consume(handleMessageConsumed);

module.exports = {
  consume
};
