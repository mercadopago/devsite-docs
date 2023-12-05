# Crear pago

Es posible crear y agregar información de pago utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API [Crear pago](/developers/es/reference/payments/_payments/post).

> NOTE
>
> Importante
>
> Al ejecutar las APIs mencionadas en esta documentación, es posible que encuentre el atributo `X-Idempotency-Key`. Completarlo es crucial para asegurar la ejecución y reejecución de las solicitudes sin situaciones no deseadas, como pagos duplicados, por ejemplo.

[[[
```python

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

payment_data = {
    "transaction_amount": 100,
    "token": 'ff8080814c11e237014c1ff593b57b4d',
    "installments": 1,
    "payer": {
        "type": "customer",
        "id": "123456789-jxOV430go9fx2e"
    }
}

payment_response = sdk.payment().create(payment_data, request_options)
payment = payment_response["response"]

```
]]]