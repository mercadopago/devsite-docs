## Obtener medios de pago

Es posible consultar los métodos de pago disponibles y obtener una lista con los detalles de cada uno utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API [Obtener medios de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payment_methods/_payment_methods/get).

[[[
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var response = await mercadopago.payment_methods.listAll();
var payment_methods = response.body;
```
]]]