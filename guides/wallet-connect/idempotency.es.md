# Idempotencia

Problemas de conexión o interrupciones del servicio pueden interferir en la comunicación al enviar o recibir datos para crear un Advanced Payment.

Para garantizar la creación correcta de un Advanced Payment, puedes realizar un nuevo intento de envío de los datos. Sin embargo, es posible que ya se haya creado el pago y debido a la interrupción no se haya recibido la respuesta correcta. Por lo que estos nuevos intentos crearán un nuevo Advanced Payment.

Para evitar la duplicidad, es obligatorio enviar una clave única en el header X-Idempotency-Key que identifique la creación de un solo Advanced Payment. De esta manera, cuando hagas un nuevo intento, puedes enviar la misma clave para indicar que es el mismo proceso.


> NOTE
>
> Importante
>
> Si el Advanced Payment ya ha sido creado, se devolverá su información sin crear un nuevo pago.

A continuación se muestra el diagrama que ilustra el funcionamiento de la `Idempotency Key` en el proceso de creación de un Advanced Payment.

![idempotency-flow](/images/wallet-connect/idempotency.es.png)


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

Al ejecutar el _request_, puedes recibir diferentes tipos de respuestas originadas por razones específicas. Consulta la sección [Respuestas](/developers/es/docs/wallet-connect/payment-flow/idempotency/responses) para obtener más información.
