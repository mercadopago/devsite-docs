# Reembolso de um Advanced Payment

É possível fazer o reembolso do Advanced Payment completo ou de um `disbursement` individual.

Caso seja feito um reembolso completo do Advanced Payment, ele passará ao estado `refunded`. No caso de realizar um reembolso parcial, o Advanced Payment ficará em estado `partially_refunded`.

> WARNING
> 
> Importante
>
> Deve-se ter em conta que este processo não é imediato. Quando se realiza o reembolso, um processo assincrônico é disparado para reembolsar todos os pagamentos gerados. A mudança de estado do Advanced Payment será informada mediante Webhooks.

#### Request: Reembolso de um Advanced Payment completo
```curl
curl -X POST \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/ID/refunds?access_token=MKT_ACCESS_TOKEN' \
    -d '{...}'
```

#### Request: Reembolso de um Disbursement individual
```curl
curl -X POST \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/ID/disbursements/DISBURSEMENT_ID/refunds?access_token=MKT_ACCESS_TOKEN' \
    -d '{...}'
```

Também é possível fazer o reembolso por um valor menor ao capturado num `disbursement` individual. Nesse caso envie no `body` o parâmetro `amount` com o valor desejado.

```json
{
  "amount": 10.2
}
```  
