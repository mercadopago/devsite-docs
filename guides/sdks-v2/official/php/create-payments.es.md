# Crear pago

Es posible crear y agregar información de pago utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API [Crear pago](/developers/es/reference/payments/_payments/post).

> NOTE
>
> Importante
>
> Al ejecutar las APIs mencionadas en esta documentación, es posible que encuentre el atributo `X-Idempotency-Key`. Completarlo es crucial para asegurar la ejecución y reejecución de las solicitudes sin situaciones no deseadas, como pagos duplicados, por ejemplo.

[[[
```php
<?php
  $createRequest = [
    "transaction_amount" => 100,
    "description" => "description",
    "payment_method_id" => "pix",
      "payer" => [
        "email" => "test_user_24634097@testuser.com",
      ]
  ];

  $client = new PaymentClient();
  $request_options = new MPRequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $client->create($createRequest, $request_options);
?>
```
]]]

# Buscar pagos

Puede buscar los pagos realizados en los últimos doce meses a partir de la fecha de búsqueda utilizando el SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Buscar Pagos](/developers/es/reference/payments/_payments_search/get).

[[[
```php
<?php
  $searchRequest = new MPSearchRequest(0, 0, [
    "sort" => "date_created", 
    "criteria" => "desc", 
    "external_reference" => "ID_REF"
  ]);
  $client = new PaymentClient();
  $request_options = new MPRequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $client->search($searchRequest, $request_options);
?>
```
]]]

# Obtener pago

Es posible consultar toda la información de un pago a través del ID de pago utilizando el SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Obtener Pago](/developers/es/reference/payments/_payments_id/get).

[[[
```php
<?php
  $client = new PaymentClient();
  $payment = $client->get(id);
?>
```
]]]

# Actualizar pago

Es posible cambiar los datos de un determinado pago enviando los parámetros con la información que desea actualizar a través del SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Actualizar pago](/developers/es/reference/payments/_payments_id/put)

[[[
```php
<?php
  $client = new PaymentClient();
  $request_options = new MPRequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->capture(123456789, 100, $request_options);
?>
```
]]]