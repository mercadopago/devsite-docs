## Reembolso de un Advanced Payment

Se puede hacer el reembolso del Advanced Payment completo o de un `disbursement` individual.

Si se reembolsa el Advanced Payment completo, este quedará con el estado `refunded`. En caso de realizar un reembolso parcial, el Advanced Payment quedará en estado `partially_refunded.

> WARNING
>
> Hay que tener en cuenta que este proceso no es inmediato. Cuando se realiza el reembolso, se dispara un proceso asincrónico para reembolsar todos los pagos generados. El cambio de estado del Advanced Payment se informará mediante Webhooks.

###### Reembolso de un Advanced Payment completo
```curl
curl -X POST \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/ID/refunds?access_token=MKT_ACCESS_TOKEN' \
    -d '{...}'
```

###### Reembolso de un Disbursement individual
```curl
curl -X POST \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/ID/disbursements/DISBURSEMENT_ID/refunds?access_token=MKT_ACCESS_TOKEN' \
    -d '{...}'
```

También es posible hacer el reembolso por un monto menor al capturado en un `disbursement` individual. Solo hay que enviar en el `body` el parámetro `amount` con el monto deseado.

```json
{
  "amount": 10.2
}
```  