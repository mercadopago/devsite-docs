# Capturar pago

La captura de pago es la confirmación del valor que se desea cobrar al comprador. En este punto del flujo de pago, el vendedor necesita que se retire el pago de la billetera del cliente en el momento de su creación.

A continuación, se muestra el diagrama que ilustra el proceso de captura de pago mediante del endpoint de Pagos de las APIs de Wallet Connect.

![Capture-payment-flow](/images/wallet-connect/captured-payment.es.png)

## Enviar request

Al enviar el _request_ al endpoint de Pagos, asegúrate de incluir los atributos según los ejemplos a continuación.

| Parámetro | Descripción |
| --- | --- |
| X-Idempotency-Key | Este parámetro debe incluirse en el encabezado de todos los _requests_. Para obtener más información, consulte la sección de Idempotencia. |
| wallet_payment | Indica que se trata de un pago de un vendedor con Wallet Connect previamente vinculado. |
| transaction_amount | Valor total que se cobrará al comprador. |
| description | Descripción de pago. |
| external_reference | Referencia de pago asignada por el vendedor |
| payer | Información del pagador requerida para la creación del pago. |
| token | _Token_ de pago obtenido después de finalizar el flujo de la vinculación. |
| type_token | Tipo de pago, para el uso en el flujo de Wallet Connect es necesario definir el valor "wallet-token". |
| binary_mode | El valor de este campo debe ser "true". |

Con estos parámetros, envía un **POST** al endpoint [/v1/advanced_payments](/developers/es/reference/wallet_connect/_advanced_payments/post) y ejecute el _request_ o, si lo prefieres, utiliza el `curl ` a continuación .

[[[
```curl

curl -X POST \
    'https://api.mercadopago.com/v1/advanced_payments' \
    -H 'X-Idempotency-Key: IDEMPOTENCY_KEY' \
    -H 'Authorization: Bearer ACCESS_TOKEN' \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -d '{
           "wallet_payment":{
              "transaction_amount":700.50,
              "description":"Payment Description",
              "external_reference":"Pago_123"     
           },
           "payer":{
              "token":"PAYER_TOKEN",
              "type_token": "wallet-token"
            },
           "binary_mode": true
        }'


```
]]]

Al ejecutar el _request_, puedes recibir diferentes tipos de respuestas originadas por razones específicas. Consulta la sección [Respuestas](/developers/es/docs/wallet-connect/advanced-payments/capture-payment/returns) para obtener más información.