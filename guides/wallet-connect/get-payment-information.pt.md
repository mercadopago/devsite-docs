## Obter informações de pagamento

Este endpoint é utilizado para obter os dados de um Advanced Payment feito a partir de seu id.  Veja o diagrama abaixo que ilustra o processo de captura de pagamento por meio da API de Advanced Payments.

![get-payment-info](/images/wallet-connect/get-payment-information.pt.png)

Para obter informações de determinado pagamento, envie um **GET** ao endpoint [/v1/advanced_payments/{advanced_payment_id}] e execute a requisição ou, se preferir, utilize o `curl` abaixo.

[[[
```curl

curl -X GET \
      'https://api.mercadopago.com/v1/advanced_payments/{advanced_payment_id}?client.id=undefined' \
      -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' 

```
]]]
