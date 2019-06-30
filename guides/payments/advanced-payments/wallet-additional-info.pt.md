---
  indexable: false
---

# Informação adicional

É possível enviar informações que podem melhorar a análise de prevenção à fraudes e a taxa de aprovação. Para isso, é necessário enviar o campo `additional_info` com as informações do pagador e do endereço de entrega. Quanto mais informações forem enviadas, melhor será a taxa de aprovação de pagamentos.

#### Request
```curl
curl -X POST \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments?access_token=SELLER_TOKEN' \
```

#### Body
```json
{
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment",
      "external_reference":"Pago_123",
      "access_token":"PAYER_ACCESS_TOKEN"      
   },
   "binary_mode": true,
   "additional_info": {
      "shipments": {
         "receiver_address": {
         "zip_code": "1111",
         "street_name": "Avenida Uno y tres cuartos",
         "street_number": 123,
         "floor": 4,
         "apartment": "C"
      }
    },
    "payer": {
      "address": {
         "street_name": "Calle Cuatro",
         "street_number": "342"
      }
    }
  }
}
```
