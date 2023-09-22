# Get customer cards

It is possible to get the card data of a certain customer through their customer ID using the SDK below. For details on request parameters, check the [Cards](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/cards/_customers_customer_id_cards/get) API.

[[[

```php
<?php
  $client = new CustomerCardClient();
  $client->list("448870796-7ZjwhKGxILixxN");
?>
```
]]]