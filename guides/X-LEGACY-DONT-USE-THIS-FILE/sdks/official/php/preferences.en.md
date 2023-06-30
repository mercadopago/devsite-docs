## Create preference

It is possible to create Preferences using the SDK below. For details on request parameters, check the [Create preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post) API.

----[mla, mlb, mlu, mpe, mlm]----

[[[
 ```php
<?php
// Mercado Pago SDK
require __DIR__ .  '/vendor/autoload.php';

// Add Your credentials
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');

// Create a preference object
$preference = new MercadoPago\Preference();

// Create a preference item
$item = new MercadoPago\Item();
$item->title = 'My Item';
$item->quantity = 1;
$item->unit_price = 75.56;
$preference->items = array($item);
$preference->save();
?>
```
]]]

------------

----[mlc, mco]----

[[[
 ```php
<?php
// Mercado Pago SDK
require __DIR__ .  '/vendor/autoload.php';

// Add Your credentials
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');

// Create a preference object
$preference = new MercadoPago\Preference();

// Create a preference item
$item = new MercadoPago\Item();
$item->title = 'My Item';
$item->quantity = 1;
$item->unit_price = 75;
$preference->items = array($item);
$preference->save();
?>
```
]]]

------------