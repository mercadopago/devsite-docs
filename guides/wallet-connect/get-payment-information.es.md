## Obtener información de pago

Este endpoint se utiliza para obtener los datos de un Advanced Payment a través de su (id). A continuación se muestra un diagrama que ilustra el proceso de captura de pago mediante la API de Advanced Payments.

![get-payment-info](/images/wallet-connect/get-payment-information.es.png)

Para obtener información sobre un pago específico, envía un **GET** al endpoint [/v1/advanced_payments/{advanced_payment_id}](/developers/pt/reference/wallet_connect/_advanced_payments_advanced_payment_id/get) y ejecuta el _request_, o, si lo prefieres, utiliza el curl que se muestra a continuación.

[[[
```curl

curl -X GET \
    'https://api.mercadopago.com/v1/advanced_payments/ADVANCED_PAYMENT_ID?client.id=CLIENT_ID' \
      -H 'Authorization: Bearer YOUR_ACCESS_TOKEN'

```
]]]


Al ejecutar el _request_ puedes recibir diferentes tipos de respuestas originadas por razones específicas. Consulta la sección [Respuestas](/developers/es/docs/wallet-connect/advanced-payments/get-payment-information/returns) para obtener más información.
