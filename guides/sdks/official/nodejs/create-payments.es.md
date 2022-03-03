## Crear pago

Es posible crear y agregar información de pago utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API [Crear pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments/post).

[[[
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  token: 'ff8080814c11e237014c1ff593b57b4d',
  installments: 1,
  payer: {
    type: "customer"
    id: "123456789-jxOV430go9fx2e"
  }
};

mercadopago.payment.create(payment_data).then(function (data) {
  console.log(data);
});

```
]]]