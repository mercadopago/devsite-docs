# Obtener medios de pago

Es posible consultar los métodos de pago disponibles y obtener una lista con los detalles de cada uno utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API [Obtener medios de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payment_methods/_payment_methods/get).

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
]]]