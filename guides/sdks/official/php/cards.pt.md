# Obter cartões de um cliente

Consulte a lista de cartões armazenados de um cliente a fim de mostrá-los no momento de fazer um pagamento.

[[[

```php

<?php
    $customer = MercadoPago\Customer::find_by_id($id);
    $cards = $customer->cards();
?>

```
]]]