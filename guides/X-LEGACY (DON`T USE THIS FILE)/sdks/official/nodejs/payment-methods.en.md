## Get payment methods

It is possible to consult the available payment methods and obtain a list with the details of each one using the SDK below. For details on request parameters, check the [Get payment methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payment_methods/_payment_methods/get) API.

[[[
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var response = await mercadopago.payment_methods.listAll();
var payment_methods = response.body;
```
]]]