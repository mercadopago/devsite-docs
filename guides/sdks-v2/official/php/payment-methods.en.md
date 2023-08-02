# Get payment methods

It is possible to consult the available payment methods and obtain a list with the details of each one using the SDK below. For details on request parameters, check the [Payment Methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payment_methods/_payment_methods/get) API.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago\PaymentMethod::all();

?>
```
]]]