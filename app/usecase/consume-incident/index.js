const consumerGateway = require('../../gateway/consumer/incident');

const handleMessageConsumed = channel => async (message, msg = JSON.parse(message.content.toString())) => {
  try {
    const res = await consumerGateway.sendIncidentToBff(msg);
    await channel.ack(message);
    console.log('Incidente consumido com sucesso.');
  } catch (err) {
    console.log('Erro ao conectar à API do BFF');
  }
};

const consume = () => consumerGateway.consume(handleMessageConsumed);

module.exports = {
  consume
};
