## Obter meios de pagamento

Consulte todas as formas de pagamento disponíveis e obtenha uma lista com os detalhes de cada uma delas e suas propriedades.

[[[
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var response = await mercadopago.payment_methods.listAll();
var payment_methods = response.body;
```
]]]