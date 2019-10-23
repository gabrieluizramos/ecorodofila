const queue = require('../../config/queues');
const { connect } = require('amqplib');

const publish = async incident => {
  let wasPublished;

  try {
    const connection = await connect(queue.host);
    const channel = await connection.createChannel();

    await channel.assertQueue(queue.name, {
      ...queue.assertQueue,
      maxPriority: queue.priority.high
    });
    await channel.sendToQueue(queue.name, Buffer.from(JSON.stringify(incident)), {
      ...queue.options,
      priority: incident.priority
    });
    await channel.close();

    wasPublished = true;
  } catch (err) {
    console.error(err);
    wasPublished = false;
  }

  return wasPublished;
};

module.exports = publish;
