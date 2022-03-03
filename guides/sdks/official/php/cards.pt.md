# Obter cartões de um cliente

É possível obter os dados de cartões de determinado cliente através do seu ID de cliente utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Cartões](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/cards/_customers_customer_id_cards/get).

[[[

```php

<?php
    $customer = MercadoPago\Customer::find_by_id($id);
    $cards = $customer->cards();
?>

```
]]]