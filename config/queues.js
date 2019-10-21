module.exports = {
    host: 'amqp://localhost',
    name: 'incident',
    priority: {
      low: 0,
      high: 10
    },
    assert: {
      durable: true
    },
    options: {
      persistent: false
    },
    consume: {
      noAck: false
    }
};
