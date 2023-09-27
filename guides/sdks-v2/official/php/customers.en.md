# Create customer

It is possible to create customers using the SDK below. For details on the request parameters, check the [Create customer](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/customers/_customers/post) API.

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

# Search customers

It is possible to search customers using the SDK below. For details on the request parameters, check the [Search customer](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/customers/_customers_search/get) API.

[[[

```php
<?php
  $client = new CustomerClient();
  $search_request = new MPSearchRequest(0, 0, ["email" => "test_payer_12345@testuser.com"]);
  $client->search($search_request);
?>
```
]]]

## Get customers

It's possible to get customers using the SDK below. For more details on the request parameters, please refer to the [Get customers](/developers/es/reference/customers/_customers_id/get) API.

[[[
```php
<?php
  $client = new CustomerClient();
  $client->get("247711297-jxOV430go9fx2e");
?>
```
]]]

# Update customer

It is possible to update customers using the SDK below. For details on the request parameters, check the [Update customer](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/customers/_customers_id/put) API.

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