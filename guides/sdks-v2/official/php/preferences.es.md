# Crear preferencia

Es posible crear preferencias utilizando lo SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API [Crear preferencias](/developers/es/reference/preferences/_checkout_preferences/post).

[[[
 ```php
<?php
  $client = new PreferenceClient();
  $preference = $client->create([
    "external_reference" => "teste",
    "items"=> array(
      array(
        "id" => "4567",
        "title" => "Dummy Title",
        "description" => "Dummy description",
        "picture_url" => "http://www.myapp.com/myimage.jpg",
        "category_id" => "eletronico",
        "quantity" => 1,
        "currency_id" => "BRL",
        "unit_price" => 100
      )
    ),
    "payment_methods" => [
    "default_payment_method_id" => "master",
    "excluded_payment_types" => array(
      array(
        "id" => "ticket"
      )
    ),
    "installments"  => 12,
    "default_installments" => 1
  ]);
?>
```
]]]

## Asociar Facebook Ads

Puede asociar la preferencia con un píxel para rastrear las conversiones de anuncios de Facebook. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Crear preferencia](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post).

[[[
```php
===
Agrega el código en la preferencia y reemplaza el valor <code>PIXEL_ID</code> por tu identificador.
===
<?php
  // Crear un objeto preferencia
  $preference = new MercadoPago\Preference();
  // Asocia tu píxel de Facebook
  $preference->tracks = array(
    array(
      'type' => 'facebook_ad',
      'values'=> array(
        'pixel_id' => 'PIXEL_ID'
      )
    )
  );
  // ...
  // Guardar y postear la preferencia
  $preference->save();
?>
```
]]]

## Asociar Google Ads

Puede asociar una *tag* a la preferencia para realizar el seguimiento de las conversiones de Google Ads. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Crear preferencia](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post).

[[[
```php
===
Agrega el código en la preferencia y reemplaza los valores <code>CONVERSION\_ID</code> y <code>CONVERSION\_LABEL</code> por los datos de tu _tag_.
===
<?php
  // Crear un objeto preferencia
  $preference = new MercadoPago\Preference();
 
  // Asocia tu tag
  $preference->tracks = array(
    array(
        'type' => 'google_ad',
        'values' => array(
          'conversion_id' => 'CONVERSION_ID',
          'conversion_label' => 'CONVERSION_LABEL'
        )
    )
  );
  ...
  // Guardar y postear la preferencia
  $preference->save();
?>
```
]]]