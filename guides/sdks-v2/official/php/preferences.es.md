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

# Buscar preferencias

Puede encontrar toda la información de preferencias generada a través de filtros específicos o por un rango de fechas específico utilizando el SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Buscar preferencias](/developers/es/reference/preferences/_checkout_preferences_search/get).

[[[
```php
<?php
  $client = new PreferenceClient();

  $search_request = new MPSearchRequest(1, 0, [
    "sponsor_id" => "0",
    "external_reference" => "",
    "site_id" => "MLA",
    "marketplace" => "NONE"
  ]);
  $client->search($search_request);
?>
```
]]]

# Obtener preferencia

Puede obtener toda la información de pago de un producto o servicio con el ID de preferencia deseado utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, acceda a la API [Obtener preferencia](/developers/es/reference/preferences/_checkout_preferences_id/get).

[[[
```php
<?php
  $client = new PreferenceClient();
  $client->get("123456789");
?>
```
]]]

# Actualizar preferencia

Puede actualizar los detalles de una preferencia de pago utilizando el ID de preferencia. Para detalles de los parámetros de la solicitud, acceda a la API [Actualizar preferencia](/developers/es/reference/preferences/_checkout_preferences_id/put).

[[[
```php
<?php
  $client = new PreferenceClient();

  $preference = $client->update('123456789', [
    "items"=> array(
        array(
            "id" => "4567",
            "title" => "Dummy Title",
            "quantity" => 1,
            "unit_price" => 100
       )
    ),
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