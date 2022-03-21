## Obter meios de pagamento

É possível consultar as formas de pagamento disponíveis e obter uma lista com os detalhes de cada uma delas utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Meios de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payment_methods/_payment_methods/get).

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
]]]