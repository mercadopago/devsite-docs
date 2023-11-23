## Create order 

You can create an order to associate it with the payment preference and get the URL needed to start the payment flow by using the SDK below. For details of the request parameters, access the [Create order](/developers/en/reference/merchant_orders/_merchant_orders/post) API.

[[[
```php
<?php
  $client = new MerchantOrderClient();

  $item = [
    "id" => "item id",
    "category_id" => "item category",
    "currency_id" => "BRL",
    "description" => "item description",
    "picture_url" => "item picture",
    "quantity" => 1,
    "unit_price" => "5",
    "title" => "item title"
  ];

  $createRequest = [
    "external_reference" => "default",
    "preference_id" => "Preference identification",
    "payer" => [
        "id" => 123,
        "nickname" => "JOHN"
    ],
    "site_id" => "MLA",
    "items" => $items,
    "application_id" => "10000000000000000"
  ];

  $client->create(createRequest);
?>
```
]]]

## Search orders

You can find all information for orders created through specific filters or by a specific date range through the SDK below. For details of the request parameters, access the [Search orders](/developers/en/reference/merchant_orders/_merchant_orders_search/get) API.


[[[
```php
<?php
  $client = new MerchantOrderClient();
  $client->get(123456789);
?>
```
]]]

## Get order

You can get all payment information for a product or service with the order ID of your choice through the SDK below. For details of the request parameters, access the [Get Order](/developers/en/reference/merchant_orders/_merchant_orders_id/get) API.

[[[
```php
<?php
  $client = new MerchantOrderClient();
  $client->get(123456789);
?>
```
]]]

## Update order

You can update the details of a payment by indicating the order ID and submitting the information you update using the SDK below. For details of the request parameters, access the [Update Order](/developers/en/reference/merchant_orders/_merchant_orders_id/put) API.

[[[
```php
<?php
  $client = new MerchantOrderClient();

    $request = [
      "notification_url" => "https://www.test.com"
    ];

  $client->update(123456789, $request);
?>
```
]]]
