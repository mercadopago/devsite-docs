## Get customer cards

Consult a client's saved cards in order to be able to show them when making a payment.

[[[

```php

<?php
    $customer = MercadoPago\Customer::find_by_id($id);
    $cards = $customer->cards();
?>

```
]]]