## Obtener tarjetas de un cliente

Consulta el listado de tarjetas almacenadas de un cliente para poder mostrarlas al momento de hacer un pago.

[[[
```php

<?php
    $customer = MercadoPago\Customer::find_by_id($id);
    $cards = $customer->cards();
?>

```
]]]