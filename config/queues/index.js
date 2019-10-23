module.exports = {
    host: 'amqp://localhost',
    name: 'incident',
    priority: {
      high: 10,
      keywords: require('./keywords')
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
