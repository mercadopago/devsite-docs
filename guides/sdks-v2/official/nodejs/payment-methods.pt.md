## Obter meios de pagamento

É possível consultar as formas de pagamento disponíveis e obter uma lista com os detalhes de cada uma delas utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Obter meios de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payment_methods/_payment_methods/get).

[[[
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var response = await mercadopago.payment_methods.listAll();
var payment_methods = response.body;
```
]]]