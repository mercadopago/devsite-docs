# Save card

It is possible to securely store the reference to a card used by the customer in the payment on our servers through the SDK below. For details of the request parameters, check the [Save card](/developers/en/reference/cards/_customers_customer_id_cards/post) API.

[[[
```php
<?php
  $client = new CustomerCardClient();
  $request = ["token" => "9b2d63e00d66a8c721607214ceda233a"];
  $client->create('123456789', $request);
?>
```
]]]

# Get customer cards

It is possible to get the card data of a certain customer through their customer ID using the SDK below. For details on request parameters, check the [Cards](/developers/en/reference/cards/_customers_customer_id_cards/get) API.

[[[

```php
<?php
  $client = new CustomerCardClient();
  $client->list("448870796-7ZjwhKGxILixxN");
?>
```
]]]

# Get card

You can consult the reference information of a stored card associated with a customer using the SDK below. For details of the request parameters, check the  [Get Card](/developers/en/reference/cards/_customers_customer_id_cards_id/get) API.

[[[
```php
<?php
  $client = new CustomerCardClient();
  $client->get("448870796-7ZjwhKGxILixxN", "8987269652");
?>
```
]]]

# Delete card

You can delete the reference of a card associated with the customer whenever necessary using the SDK below. For details of the request parameters, check the [Delete Card](/developers/en/reference/cards/_customers_customer_id_cards_id/delete) API.

[[[
```php
<?php
  $client = new CustomerCardClient();
  $client->delete("448870796-7ZjwhKGxILixxN", "8987269652");
?>
```
]]]