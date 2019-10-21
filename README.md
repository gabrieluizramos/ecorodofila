# Challenge - EcoRodovias

Sistema de Otimização de Gestão de Recursos.
Responsável por gerir de forma otimizada os incidentes dos acionamentos existentes hoje.

## Sobre

O sistema baseia-se em uma fila de prioridades, utilizando RabbitMQ para criação e consumo de uma fila responsável por conter todos os acionamentos da EcoRodovias.

Com o SLA atual e podendo existir diversos casos com prioridades diferentes, os incidentes serão categorizados de 0 a 10, sendo 0 um incidente pouco grave e 10 um incidente extremamente grave.

### Stack
- NodeJS como camada aplicação
- RabbitMQ como fila/message broker

#### Utilização

O sistema expõe uma API para criação de novos incidentes, para isso, basta realizar o seguinte request:

```sh
curl --request POST \
  --url "http://localhost:3000/api/publish" \
  --header 'Authorization: {token}' \
  --header 'Content-Type: application/json' \
  --header 'cache-control: no-cache' \
  --data '{	"incident": {"name": "name", "description": "description"}}'
```

Onde você deve prover um `token` válido para poder criar um incidente e enviar como corpo do request o seguinte payload:

```jsonc
{
  "incident": {
    "name": "nome do incidente",
    "description": "descricao do ocorrido"
  }
}
```

#### RabbitMQ

Lembre-se que o serviço do RabbitMQ possui um dashboard para visualização.
Você pode acessá-lo [localmente rodando na porta 15672](http://localhost:15672) e os dados de acesso são:

**username**: guest
**password**: guest
