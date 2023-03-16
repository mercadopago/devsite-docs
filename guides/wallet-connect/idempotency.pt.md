# Idempotência 

Problemas de conexão ou quedas de serviço podem interromper a comunicação no momento de enviar ou receber os dados para criar um Advanced Payment.

Para garantir a criação correta de um Advanced Payment, você pode realizar uma nova tentativa de envio dos dados, contudo, é possível que o mesmo já tenha sido criado e devido à interrupção não tenha recebido a resposta correta. Portanto, essas novas tentativas criarão um novo Advanced Payment.

Para evitar duplicidade, é obrigatório o envio de uma chave única no Header X-Idempotency-Key que identifique a criação de um único Advanced Payment. Desta forma, quando uma nova tentativa for feita, a mesma chave pode ser enviada para indicar que é o mesmo processo.

> NOTE
>
> Importante
>
> Se o Advanced Payment já foi criado, suas informações são retornadas sem a criação de um novo pagamento.

Veja abaixo o diagrama que ilustra o funcionamento da `Idempotency Key` no processo de criação de um Advanced Payment.

![idempotency-flow](/images/wallet-connect/idempotency.pt.png)

## Enviar request

[[[
```curl

curl -X POST \
    -H 'X-Idempotency-Key: IDEMPOTENCY_KEY' \
    -H 'Authorization: Bearer ACCESS_TOKEN'
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments' \
    -d '{
        "wallet_payment":{
           "transaction_amount":700.50,
           "description":"Payment Description",
           "external_reference":"Pago_123"     
        },
       "payer":{
           "token":"PAYER_TOKEN",
           "type_token": "wallet-token"
        }
      }'

```
]]]

Ao executar o `request` você poderá receber diferentes tipos de respostas originadas por razões específicas. Veja a seção [Respostas](/developers/pt/docs/wallet-connect/advanced-payments/idempotency/returns) para mais informações.