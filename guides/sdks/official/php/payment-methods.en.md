## Get payment methods

Consult all the available payment methods and obtain a list with the details of each one and its properties.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
]]]