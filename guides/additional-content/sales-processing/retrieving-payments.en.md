# Received payments management

You can find any information about generated payments using our APIs.

## Get created payments using your ID

To get information about a payment using your ID, you need to make the following request:
```curl
curl -G -X GET \
-H "accept: application/json" \
"https://api.mercadopago.com/v1/payments/<payment_id>" \
-d "access_token=ACCESS_TOKEN" \
-d "status=approved" \
-d "offset=0" \
-d "limit=10"`
```
```php
<?php
	require ('mercadopago.php');

	$mp = new MP ("ENV_ACCESS_TOKEN");

	$payment = $mp->get(
		"/v1/payments/". $paymentId
	);
?>
```

Expected response:

```json
{
  "id": 2798247250,
  "date_created": "2017-06-16T21:10:06.000-04:00",
  "date_approved": "2017-06-16T21:10:06.000-04:00",
  "date_last_updated": "2017-06-28T19:39:41.000-04:00",
  "date_of_expiration": null,
  "money_release_date": "2017-06-21T21:10:06.000-04:00",
  "operation_type": "regular_payment",
  "payment_method_id": "visa",
  "payment_type_id": "credit_card",
  "status": "approved",
  "status_detail": "accredited",
  "currency_id": "[FAKER][CURRENCY][ACRONYM]",
  "description": "Telefono Celular iPhone 7",
  ...,
}
```

You can get information about all the returned variables in the [API reference for the resource Payments](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments_id/get).

## Search payments

If you want to search payments, you can use the `Payment Search API`:

```php
<?php
	require ('mercadopago.php');

	$mp = new MP ("ENV_ACCESS_TOKEN");

	$payment = $mp->get(
		"/v1/payments/search",
		array(
			"external_reference" => "123456789"
		)
	);
?>
```
```curl
curl -G -X GET \
-H "accept: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
"https://api.mercadopago.com/v1/payments/search" \
-d "status=approved" \
-d "offset=0" \
-d "limit=10"
```

In this example, your search is done through the field `external_reference`, but it is possible to use many other filters.

### Search filters

When searching for payments, the following variables may be applied:

* `payer.id`: : Buyer’s identification.
* `installments`: Number of installments (example: `12`).
* `payment_method_id`: Payment method (e.g.: `visa`).
* `payment_type_id`: Type of payment method (e.g.:`credit_card`).
* `operation_type`: The type of operation, which may  `regular_payment`, `pos_payment`, `recurring_payment`, etc.
* `processing_mode`: If the payment is Gateway or Aggregator (example: `gateway`).
* `status`: Payment status.
* `status_detail`: Detail of the payment status.

The total number of results will be displayed, which can then be used for pagination:

```json
{
  "paging": {
    "total": 1234,
    "limit": 30,
    "offset": 0
  },
  "results": [
    {}
  ]
}
```

### Filter search results by date

It is also possible to search setting specific dates:

* `begin_date`: Start date of the search (ISO 8601), eg. `2017-05-06T15:07:20.000-04:00`.
* `end_date`: End date of the search (ISO 8601), eg. `2017-05-06T15:07:20.000-04:00`.

Date fields also support the `NOW` variable combined with the following variables:

* `MINUTES`: Minutes  (1 to 60).
* `HOURS`: Hours  (1 to 24).
* `WEEKS`: Weeks (1 to 8).
* `DAYS`: Days (1 to 365).

For example `NOW-5MINUTES`:

```php
<?php
	require ('mercadopago.php');

	$mp = new MP ("ENV_ACCESS_TOKEN");

	$payment = $mp->get(
		"/v1/payments/search",
		array(
			"begin_date" => "NOW-2HOURS",
			"end_date" => "NOW",
			"range" => "date_last_updated",
			"sort" => "date_last_updated",
			"criteria" => "desc"
		)
	);
?>
```

This example shows all **payments updated** in the last 2 hours up to the current date, in descending order.

You can use the `range` field to search a specific date field, e.g. `date_created` or `date_last_updated`.

### Payments pagination

If you have too many results, you must page the payments using the following attributes:

| Attribute | Description | Example |
| :--- | :--- | :--- |
| `limit`| Number of results shown (max value = 50). If it is not defined, it will return up to 30 results found. | `limit=50`|
| `offset` | Position from which you want the results to be returned. By default, the value is 0 (max. allowed: 10000). | `offset=100`|
| `sort` | It sets a criterion to sort the results. | `sort=external_reference` |
| `criteria` | Order of information. It may be asc (ascending) or desc (descending). | `criteria=asc` |

Example of pagination:

```php
<?php
	require ('mercadopago.php');

	$mp = new MP ("ENV_ACCESS_TOKEN");

	$payment = $mp->get(
		"/v1/payments/search",
		array(
			"external_reference" => "123456789",
			"limit" => 50,
			"offset" => 200,
			"sort" => "id",
			"criteria" => "desc"
		)
	);
?>
```

This would display 50 results, filtering the first 200, and sorting them by `id` in descending order.