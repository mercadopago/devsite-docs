# Crear pago

Es posible crear y agregar información de pago utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API [Crear pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments/post).

[[[
```php
<?php
  $item = [
    "id" => "PR0001",
    "title" => "Point Mini",
    "description" => "Producto Point para cobros con tarjetas mediante bluetooth",
    "picture_url" => "https://http2.mlstatic.com/resources/frontend/statics/growth-sellers-landings/device-mlb-point-i_medium@2x.png",
    "category_id" => "electronics",
    "quantity" => 1,
    "unit_price" => "58.8"
  ];

  $payer = [
    "entity_type" => "individual",
    "type" => "customer",
    "first_name" => "Test",
    "last_name" => "Test",
    "email" => "test_user_123@testuser.com",
  ];

  $receiverAddress = [
    "zip_code" => "12312-123",
    "state_name" => "Rio de Janeiro",
    "city_name" => "Buzios",
    "street_name" => "Av das Nacoes Unidas",
    "street_number" => "3003"
  ];

  $shipments = [
    "receiver_address" => $receiverAddress
  ];

  $additionalInfo = [
    "items" => [$item],
    "shipments" => $shipments
  ];

  $order = [
    "id" => 1234,
    "type" => "mercadolibre"
  ];

  $createRequest = [
    "additional_info" => $additionalInfo,
    "description" => "Payment for product",
    "external_reference" => "MP0001",
    "installments" => 1,
    "payer" => $payer,
    "transaction_amount" => 100,
    "order" => $order,
    "payment_method_id" => "visa",
    "token" => "1234",
  ];

  $client = new PaymentClient();
  $request_options = new MPRequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $client->create($createRequest, $request_options);
?>
```
]]]