curl --request POST \
  --url "http://localhost:3002/api/incident" \
  --header 'Authorization: admin:123token' \
  --header 'Content-Type: application/json' \
  --header 'cache-control: no-cache' \
  --data '{	"incident": {"name": "Incidente enviado via fila", "description": "Descrição do incidente enviado via fila"}}'
