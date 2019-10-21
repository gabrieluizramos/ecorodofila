# Challenge - EcoRodovias

Sistema de Otimização de Gestão de Recursos.
Responsável por gerir de forma otimizada os incidentes dos acionamentos existentes hoje.

## Sobre

O sistema baseia-se em uma fila de prioridades, utilizando RabbitMQ para criação e consumo de uma fila responsável por conter todos os acionamentos da EcoRodovias.

Com o SLA atual e podendo existir diversos casos com prioridades diferentes, os incidentes serão categorizados de 0 a 10, sendo 0 um incidente pouco grave e 10 um incidente extremamente grave.

O sistema expões uma API para criação de novos incidentes.
