const generateId = require('uniqid');

module.exports = {
  INACTIVE: [
    {
      id: generateId(),
      name: 'Não processado 1',
      description: 'Não processado - descricao do ocorrido 1'
    },
    {
      id: generateId(),
      name: 'Não processado 2',
      description: 'Não processado - descricao do ocorrido 2'
    }
  ],
  PROCESSING: [
    {
      id: generateId(),
      name: 'Em processamento',
      description: 'Processando - descricao do ocorrido',
      user: 'admin'
    }
  ],
  PROCESSED: [
    {
      id: generateId(),
      name: 'Finalizado 1',
      description: 'Finalizado - descricao do ocorrido',
      user: 'admin'
    },
    {
      id: generateId(),
      name: 'Finalizado 2',
      description: 'Finalizado - descricao do ocorrido',
      user: 'admin'
    }
  ]
};
