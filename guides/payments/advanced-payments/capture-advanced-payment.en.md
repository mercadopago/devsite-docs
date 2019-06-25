# Capture an Advanced Payment

The Advanced Payment API allows you to make payments of the [Authorization and Capture](https://www.mercadopago.com.br/developers/en/guides/payments/api/authorization-and-capture) type. For these cases, an Advanced Payment must be created with the `capture` field as `false`, which will reserve the amount until it is captured.

To capture it you must do as follows:

#### Request
```curl
curl -X PUT \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/ID?access_token=MKT_ACCESS_TOKEN' \
    -d '{...}'
```

#### Body
```json
{
  "capture": true
}
```  
