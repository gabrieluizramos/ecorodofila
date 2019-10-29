const axios = require('axios');
const { connect } = require('amqplib');

const queue = require('../../configs/queue');
const server = require('../../configs/server');

const client = axios.create({
  baseURL: `${server.base}:${server.ports.bff}/api`
});

const sendIncidentToBff = async incident => {
  try {
    const res = await client.post('/incident', { incident });
  } catch (err) {
    throw err;
  }
};

const consume = async handleNewMessage => {
  try {
    const connection = await connect(queue.host);
    const channel = await connection.createChannel();

    await channel.assertQueue(queue.name, {
      ...queue.assert,
      maxPriority: queue.priority.high,
    });
    await channel.prefetch(1);
    await channel.consume(queue.name, handleNewMessage(channel), queue.consume);

  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  consume,
  sendIncidentToBff
};
