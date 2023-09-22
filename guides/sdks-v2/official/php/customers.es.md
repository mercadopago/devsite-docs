# Crear cliente

Es posible crear clientes utilizando lo SDK a continuación. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Crear Cliente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/customers/_customers/post).

[[[
```php
<?php
  $client = new CustomerClient();
  $body = [
    'email' => 'test_user_123243148932@testuser.com',
    'first_name' => 'Jhon',
    'last_name' => 'Doe',
    'phone' => [
        'area_code' => '55',
        'number' => '991234567'
    ],
    'identification' => [
        'type' => 'CPF',
        'number' => '12345678900'
    ],
    'default_address' => 'Home',
    'address' => [
        'id' => '123123',
        'zip_code' => '01234567',
        'street_name' => 'Rua Exemplo',
        'street_number' => 123,
        'city' => []
    ],
    'date_registered' => '2023-09-07T11:37:30.000-04:00',
    'description' => 'Description del user',
    'default_card' => 'None'
  ];

  $client->create($body);
?>
```
]]]

# Buscar clientes

Es posible buscar clientes utilizando lo SDK a continuación. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Buscar en Clientes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/customers/_customers_search/get).

[[[

```php
<?php
  $client = new CustomerClient();
  $search_request = new MPSearchRequest(0, 0, ["email" => "test_payer_12345@testuser.com"]);
  $client->search($search_request);
?>
```
]]]

# Actualizar cliente

Es posible actualizar clientes utilizando lo SDK a continuación. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Actualizar Cliente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/customers/_customers_id/put).

[[[
```php
<?php
  $client = new CustomerClient();
  $customerRequest = [
    'email' => 'jhon@doe.com',
    'first_name' => 'Jhon',
    'last_name' => 'Doe',
    'phone' => [
        'area_code' => '55',
        'number' => '991234567'
    ],
    'identification' => [
        'type' => 'CPF',
        'number' => '12345678900'
    ],
    'default_address' => 'Home',
    'address' => [
        'id' => '123123',
        'zip_code' => '01234567',
        'street_name' => 'Rua Exemplo',
        'street_number' => 123,
        'city' => []
    ],
    'date_registered' => '2023-09-07T11:37:30.000-04:00',
    'description' => 'Description del user',
    'default_card' => 'None'
  ];

  $client->update('247711297-jxOV430go9fx2e', $customerRequest)
?>
```
]]]