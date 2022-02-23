## Obtener medios de pago

Consulta todos los medios de pago disponibles y obtén un listado con el detalle de cada uno y sus propiedades.

[[[
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var response = await mercadopago.payment_methods.listAll();
var payment_methods = response.body;
```
]]]