# Obtener tarjetas de un cliente

Es posible obtener los datos de la tarjeta de un determinado cliente a través de su ID de cliente utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Tarjetas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/cards/_customers_customer_id_cards/get).

[[[
```php

<?php
    $customer = MercadoPago\Customer::find_by_id($id);
    $cards = $customer->cards();
?>

```
]]]