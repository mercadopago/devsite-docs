---
sites_supported:
  - mla
  - mlb
  - mlm
  - mlc
  - mpe
---

# Idempotência

Algumas ocasiões podem apresentar problemas de conexão, quedas de serviços, etc. que poderiam interromper a comunicação ao enviar ou receber os dados para criar um Advanced Payment.

Para assegurar a criação do mesmo, pode-se tentar o envio dos mesmos dados novamente, mas é possível que o Advanced Payment já tenha sido criado e devido à interrupção não recebeu a resposta correta, ocasionando que, ao realizar uma nova tentativa, seja gerado um novo Advanced Payment.

Para evitar duplicidade, pode-se enviar de uma chave única no header `X-Idempotency-Key` que identifique a criação de um único Advanced Payment não importa quantas vezes se enviem os mesmos dados.

Desta maneira, ao fazer uma nova tentativa, pode-se enviar a mesma chave para indicar que é o mesmo processo. Se o Advanced Payment já foi criado, devolve-se a informação do mesmo sem criar um novo.

```curl
curl -X POST \
     -H 'X-Idempotency-Key: faDF8323asd298' \
     -H 'Accept: application/json' \
     -H 'Content-Type: application/json' \
     'https://api.mercadopago.com/v1/advanced_payments?access_token=MKT_ACCESS_TOKEN' \
     -d '{...}'
```
