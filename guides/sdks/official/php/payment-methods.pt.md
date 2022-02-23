## Obter meios de pagamento

Consulte todas as formas de pagamento disponíveis e obtenha uma lista com os detalhes de cada uma delas e suas propriedades.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
]]]