const queue = require('../../../../configs/queue');

const consumer = require('../../../../usecase/consume-incident');
consumer.consume();
