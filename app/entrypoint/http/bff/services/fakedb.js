const generateId = require('uniqid');

module.exports = {
  withWorker: {
    INACTIVE: [
      {
        id: generateId(),
        name: 'Não tratado 1',
        description: 'Não tratado - descricao do ocorrido',
        priority: 1,
      },
      {
        id: generateId(),
        name: 'Não tratado 2',
        description: 'Não tratado - descricao do ocorrido',
        priority: 2,
      },
      {
        id: generateId(),
        name: 'Não tratado 1',
        description: 'Não tratado - descricao do ocorrido',
        priority: 3,
      },
      {
        id: generateId(),
        name: 'Não tratado 2',
        description: 'Não tratado - descricao do ocorrido',
        priority: 4
      },
      {
        id: generateId(),
        name: 'Não tratado 1',
        description: 'Não tratado - descricao do ocorrido',
        priority: 1,
      },
      {
        id: generateId(),
        name: 'Não tratado 2',
        description: 'Não tratado - descricao do ocorrido',
        priority: 2,
      },
      {
        id: generateId(),
        name: 'Não tratado 1',
        description: 'Não tratado - descricao do ocorrido',
        priority: 3,
      },
      {
        id: generateId(),
        name: 'Não tratado 2',
        description: 'Não tratado - descricao do ocorrido',
        priority: 4
      }
    ],
    PROCESSING: [
      {
        id: generateId(),
        name: 'Finalizado 1',
        description: 'Finalizado - descricao do ocorrido',
        user: 'guest',
        priority: 5
      },
      {
        id: generateId(),
        name: 'Finalizado 1',
        description: 'Finalizado - descricao do ocorrido',
        user: 'admin',
        priority: 5
      }
    ],
    PROCESSED: [
      {
        id: generateId(),
        name: 'Finalizado 1',
        description: 'Finalizado - descricao do ocorrido',
        user: 'admin',
        priority: 6
      },
      {
        id: generateId(),
        name: 'Finalizado 1',
        description: 'Finalizado - descricao do ocorrido',
        user: 'guest',
        priority: 7
      },
      {
        id: generateId(),
        name: 'Finalizado 1',
        description: 'Finalizado - descricao do ocorrido',
        user: 'guest',
        priority: 8
      },
      {
        id: generateId(),
        name: 'Finalizado 1',
        description: 'Finalizado - descricao do ocorrido',
        user: 'admin',
        priority: 9,
      },
      {
        id: generateId(),
        name: 'Finalizado 2',
        description: 'Finalizado - descricao do ocorrido',
        user: 'admin',
        priority: 10
      },
      {
        id: generateId(),
        name: 'Finalizado 1',
        description: 'Finalizado - descricao do ocorrido',
        user: 'admin',
        priority: 6
      },
      {
        id: generateId(),
        name: 'Finalizado 1',
        description: 'Finalizado - descricao do ocorrido',
        user: 'guest',
        priority: 7
      },
      {
        id: generateId(),
        name: 'Finalizado 1',
        description: 'Finalizado - descricao do ocorrido',
        user: 'guest',
        priority: 8
      },
      {
        id: generateId(),
        name: 'Finalizado 1',
        description: 'Finalizado - descricao do ocorrido',
        user: 'admin',
        priority: 9,
      },
      {
        id: generateId(),
        name: 'Finalizado 2',
        description: 'Finalizado - descricao do ocorrido',
        user: 'admin',
        priority: 10
      }
    ]
  },
  default: {
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
  }
}
