const queue = require('../../configs/queue');
const { connect } = require('amqplib');

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
  consume
};
