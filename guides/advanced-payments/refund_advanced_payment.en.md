# Refund of an Advanced Payment

The full Advanced Payment or individual disbursement can be refunded.

If the full Advanced Payment is refunded, it will be `refunded`. In case of a partial refund, the Advanced Payment will be in the `partially_refunded` state.

> WARNING
> 
> Important
>
> Keep in mind that this process is not immediate. When the refund is made, an asynchronous process is triggered to refund all generated payments. The status change of the Advanced Payment will be informed through Webhooks.

#### Request: Refund of a full Advanced Payment
```curl
curl -X POST \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/ID/refunds?access_token=MKT_ACCESS_TOKEN' \
    -d '{...}'
```

#### Request: Refund of an individual Disbursement
```curl
curl -X POST \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/ID/disbursements/DISBURSEMENT_ID/refunds?access_token=MKT_ACCESS_TOKEN' \
    -d '{...}'
```

It is also possible to make the refund for an amount less than that captured in an individual `disbursement`. You only have to send the `amount` parameter in the `body` with the desired amount.

```json
{
  "amount": 10.2
}
```  
