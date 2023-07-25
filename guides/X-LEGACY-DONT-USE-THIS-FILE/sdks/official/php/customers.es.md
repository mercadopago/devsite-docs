## Crear cliente

Es posible crear clientes utilizando lo SDK a continuación. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Crear Cliente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/customers/_customers/post).

[[[
```php

<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $customer = new MercadoPago\Customer();
  $customer->email = "test_payer_12345@testuser.com";
  $customer->save();

  $card = new MercadoPago\Card();
  $card->token = "9b2d63e00d66a8c721607214cedaecda";
  $card->customer_id = $customer->id();
  $card->issuer = array("id" => "3245612");
  $card->payment_method = array("id" => "debit_card");
  $card->save();

?>

```
]]]

## Buscar clientes

Es posible buscar clientes utilizando lo SDK a continuación. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Buscar en Clientes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/customers/_customers_search/get).

[[[

```php

<?php

  $filters = array(
    "id"=>"247711297-jxOV430go9fx2e"
  );

  $customers = MercadoPago\Customer::search($filters);

?>

```
]]]

## Actualizar cliente

Es posible actualizar clientes utilizando lo SDK a continuación. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Actualizar Cliente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/customers/_customers_id/put).

[[[
```php

<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $customer = new MercadoPago\Customer();
  $customer->email = "user@user.com";
  $customer->first_name = "john";
  $customer->last_name = "wagner";
  $customer->phone = array("area_code" => "[FAKER][PHONE_NUMBER][AREA_CODE]", "number" => "001234567");
  $customer->identification = array("type" => "[FAKER][IDENTIFICATION][TYPE]", "number" => "12341234");
  $customer->default_address = "Casa";
  $customer->address = array("zip_code" => "[FAKER][ADDRESS][ZIP_CODE]", "street_name" => "[FAKER][ADDRESS][STREET_NAME]", "street_number" => "2");
  $customer->description = "Informações do cliente";
  $customer->default_card = "None";
  $customer->update();

?>

```
]]]