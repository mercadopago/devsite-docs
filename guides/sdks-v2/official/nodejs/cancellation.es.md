## Crear cancelación

Es posible cancelar una compra específica desde el ID de pago utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API de [Cancelación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_payments_payment_id/put).

[[[
```node
const client = new MercadoPago({ accessToken: 'ACCESS_TOKEN' });
const payments = new Payments(client);
payments.cancel('123456789', { idempotencyKey: '<SOME_UNIQUE_VALUE>' })
    .then((result) => { console.log(result); })
    .catch((error) => { console.error(error); });
```
]]]