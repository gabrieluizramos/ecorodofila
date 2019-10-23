const queue = require('../../config/queues');
const { connect } = require('amqplib');

const handleQueueMessage = channel => async (message, msg = JSON.parse(message.content.toString())) => {
  console.log('Message received: ', msg)
  await channel.ack(message);
};

module.exports = consume = (async () => {
  try {
    const connection = await connect(queue.host);
    const channel = await connection.createChannel();

    await channel.assertQueue(queue.name, {
      ...queue.assert,
      maxPriority: queue.priority.high,
    });
    await channel.prefetch(1);
    await channel.consume(queue.name, handleQueueMessage(channel), queue.consume);

  } catch (err) {
    console.error(err);
  }
})();
