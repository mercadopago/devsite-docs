# Capturar pago

La captura de pago es la confirmación del valor que se desea cobrar al comprador. En este punto del flujo de pago, el vendedor necesita que se retire el pago de la billetera del cliente en el momento de su creación.

A continuación, se muestra el diagrama que ilustra el proceso de captura de pago mediante del endpoint de Pagos de las APIs de Wallet Connect.

![Capture-payment-flow](/images/wallet-connect/captured-payment.es.png)

## Enviar request

Al enviar el _request_ al endpoint de Pagos, asegúrate de incluir los atributos según los ejemplos a continuación.

| Parámetro | Descripción |
| --- | --- |
| X-Idempotency-Key | Este parámetro debe incluirse en el encabezado de todos los _requests_. Para obtener más información, consulte la sección de Idempotencia. |
| X-Meli-Session-Id | Este parámetro puede incluirse en el encabezado de los _requests_. Representa un identificador único para el dispositivo de cada comprador en el momento de la compra. Es obligatorio solo para las integraciones pertenecientes a la industria Gambling. Si tienes dudas consulta con tu representante comercial. |
| wallet_payment | Indica que se trata de un pago de un vendedor con Wallet Connect previamente vinculado. |
| transaction_amount | Valor total que se cobrará al comprador. |
| description | Descripción de pago. |
| external_reference | Referencia de pago asignada por el vendedor |
| forward_data.sub_merchant | Datos encaminados del `sub_merchant`. Información obligatoria que los Facilitadores de pago utilizan para identificar a los subcomercios en el momento de la transacción. Para obtener más detalles de cada campo perteneciente a `forward_data.sub_merchant`, accede a la documentación de los [Subcomercios](/developers/es/docs/wallet-connect/payment-flow/capture-payment/submerchants). |
| payer | Información del pagador requerida para la creación del pago. |
| token | _Token_ de pago obtenido después de finalizar el flujo de la vinculación. |
| type_token | Tipo de pago. Para el uso en el flujo de Wallet Connect es necesario definir el valor "wallet-token". |
| binary_mode | El valor de este campo debe ser "true". |

Con estos parámetros, envía un **POST** al endpoint [/v1/advanced_payments](/developers/es/reference/wallet_connect/_advanced_payments/post) y ejecute el _request_ o, si lo prefieres, utiliza el `curl ` a continuación .

[[[
```curl
curl -X POST \
    'https://api.mercadopago.com/v1/advanced_payments' \
    -H 'X-Idempotency-Key: IDEMPOTENCY_KEY' \
    -H 'X-Meli-Session-Id: DEVICE_ID' \
    -H 'Authorization: Bearer ACCESS_TOKEN' \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -d '{
         "wallet_payment": {
          "transaction_amount": 700.50,
          "description": "Descripción del pago",
          "external_reference": "Pago_123"
          "forward_data": {
             "sub_merchant": {
                "sub_merchant_id": 123123,
                "mcc": "5462",
                "country": "BRA",
                "address_door_number": 1,
                "zip": "2222222",
                "document_number": "222222222222222",
                "city": "SÃO PAULO",
                "address_street": "RUA A",
                "legal_name": "LOJINHA DO ZÉ",
                "region_code_iso": "BR-MG",
                "region_code": "BR",
                "document_type": "CNPJ",
                "phone": "123123123",
                "url": "www.nomedofacilitador.com.br"
               }
            }
         },
         "payer": {
            "token": "PAYER_TOKEN",
              "type_token": "wallet-token"
         },
         "binary_mode": true
      }'
```
]]]

Al ejecutar el _request_, puedes recibir diferentes tipos de respuestas originadas por razones específicas. Consulta la sección [Respuestas](/developers/es/docs/wallet-connect/advanced-payments/capture-payment/returns) para obtener más información.