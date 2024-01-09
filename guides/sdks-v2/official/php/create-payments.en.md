# Create payment

You can create and add payment information using the SDK below. For details on request parameters, check the [Create payment](/developers/en/reference/payments/_payments/post) API.

> NOTE
>
> Important
>
> When executing the APIs mentioned in this documentation, you may come across the attribute `X-Idempotency-Key`. Filling it out is important to ensure the execution and reexecution of requests without undesirable situations, such as duplicate payments, for example.

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
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $client->create($createRequest, $request_options);
?>
```
]]]

# Search payments

You can search for payments made in the last twelve months from the search date using the SDK below. For details of the request parameters, access the [Search Payments](/developers/en/reference/payments/_payments_search/get) API.

[[[
```php
<?php
  $searchRequest = new MPSearchRequest(0, 0, [
    "sort" => "date_created", 
    "criteria" => "desc", 
    "external_reference" => "ID_REF"
  ]);
  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $client->search($searchRequest, $request_options);
?>
```
]]]

# Get payment

It is possible to query all the information of a payment through the payment ID using the SDK below. For details of the request parameters, access the [Get Payment](/developers/en/reference/payments/_payments_id/get) API.

[[[
```php
<?php
  $client = new PaymentClient();
  $payment = $client->get(id);
?>
```
]]]

# Update payment

It is possible to change the data of a certain payment by sending the parameters with the information you want to update through the SDK below. For details of the request parameters, access the [Update payment](/developers/en/reference/payments/_payments_id/put) API.

[[[
```php
<?php
  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->capture(123456789, 100, $request_options);
?>
```
]]]