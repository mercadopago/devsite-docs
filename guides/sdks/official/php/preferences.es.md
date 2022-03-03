## Crear preferencia

Es posible crear preferencias utilizando lo SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API [Crear preferencias](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post).

[[[
```php
<?php
  $preference = new MercadoPago\Preference();

  $item = new MercadoPago\Item();
  $item->title = "Blue shirt";
  $item->quantity = 10;
  $item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
  $item->unit_price = [FAKER][COMMERCE][PRICE];

  $payer = new MercadoPago\Payer();
  $payer->email = "test_user_19653727@testuser.com";

  $preference->items = array($item);
  $preference->payer = $payer;
  $preference->save();
?>
```
]]]