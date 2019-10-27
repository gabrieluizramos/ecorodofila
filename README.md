# EcoRodoFila
## Fiap Challenge - EcoRodovias

Sistema de Otimização de Gestão de Recursos.
Responsável por gerir de forma otimizada os incidentes dos acionamentos existentes hoje.

### Sobre

O sistema baseia-se em uma fila de prioridades, utilizando RabbitMQ para criação e consumo de uma fila responsável por conter todos os acionamentos da EcoRodovias.

Com o SLA atual e podendo existir diversos casos com prioridades diferentes, os incidentes serão categorizados de 0 a 10, sendo 0 um incidente pouco grave e 10 um incidente extremamente grave.

#### Stack
- [NodeJS](https://nodejs.org/en/) como camada de backend
- [RabbitMQ](https://www.rabbitmq.com) como fila/message broker
- [NextJS](https://nextjs.org) como camada de frontend

##### Utilização

###### Criação de incidentes (Publisher)

O sistema expõe uma API para criação de novos incidentes, para isso, basta realizar o seguinte request:

```sh
curl --request POST \
  --url "http://localhost:3002/api/incident" \
  --header 'Authorization: admin:123token' \
  --header 'Content-Type: application/json' \
  --header 'cache-control: no-cache' \
  --data '{	"incident": {"name": "name", "description": "description"}}'
```

Onde você deve prover um nome de usuário e um `token` válido para poder criar um incidente e enviar como corpo do request o seguinte payload:

```jsonc
{
  "incident": {
    "name": "nome do incidente",
    "description": "descricao do ocorrido"
  }
}
```

###### Consumo de incidentes (Consumer/BFF)
O sistema expõe uma API para consumo de incidentes por usuário, para isso, basta realizar o seguinte request:

```sh
curl --request GET \
  --url "http://localhost:3001/api/incident" \
  --header 'Authorization: admin:123token' \
  --header 'Content-Type: application/json' \
  --header 'cache-control: no-cache'
```

Onde você deve prover um nome de usuário e um `token` válido para poder consumir e começar a tratar com um incidente.

##### RabbitMQ

Lembre-se que o serviço do RabbitMQ possui um dashboard para visualização.
Você pode acessá-lo [localmente rodando na porta 15672](http://localhost:15672) e os dados de acesso são:

**username**: guest
**password**: guest
