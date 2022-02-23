## Obtener medios de pago

Consulta todos los medios de pago disponibles y obtén un listado con el detalle de cada uno y sus propiedades.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
]]]