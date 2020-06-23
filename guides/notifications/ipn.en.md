# IPN Notifications

----[mla,mlb,mlc,mlm,mco,mlu]----
> WARNING
>
> Prerequisites
>
> * Have the [Checkout](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/introduction) implemented.
------------
----[mpe]----
> WARNING
>
> Prerequisites
>
> * Have the [Checkout](https://www.mercadopago.com.ar/developers/en/guides/payments/web-checkout/introduction) implemented.
------------

**IPN** (Instant Payment Notification) is a notification sent from one server to another through an `HTTP POST` request informing your transactions.

To receive event notifications on your platform, you can [previously configure a notification_url accessible for Mercado Pago](https://www.mercadopago.com.ar/ipn-notifications).


## Events

We notify events related to your orders (`merchant_orders`), received chargebacks (`chargebacks`) or received payments (`payment`).

A `merchant_order` is an entity that groups payments as well as shipments. You will have to check the data of the orders notified to you.

Whenever an event related to any of the mentioned resources takes place, we will send you a notification using `HTTP POST` to the URL that you specified.

If your application is not available or takes too long to respond, Mercado Pago will retry sending the notification according to the following interval:

1. Retry after 5 minutes.
2. Retry after 45 minutes.
3. Retry after 6 hours.
4. Retry after 2 days.
5. Retry after 4 days.

Mercado Pago will notify to this URL whenever a resource is created or when orders or payment status are updated, with two parameters:

| Field 		| Description 				 |
| ---- 		| ---- 				 |
| `topic` | Identifies the type of resource. It may be `payment`, `chargebacks` or `merchant_order` |
| `id` | A unique identification of the notified resource. |


Example: If you have configured the URL:  `https://www.yoursite.com/notifications`, you will receive payment notifications as follows:  `https://www.yoursite.com/notifications?topic=payment&id=123456789`

## What should I do after receiving a notification?

When you receive a notification in your platform, Mercado Pago awaits a response to validate that you received it correctly. To do this, you have to send a response with a `HTTP STATUS 200 (OK)` or `201 (CREATED)`.

Note that this communication is made exclusively between MercadoPago’s servers and your server, so there will be no physical user viewing any kind of result.

After that, you will be able to get full information about the notified resource by accessing the corresponding API at https://api.mercadopago.com/:

Type               | URL                                                         | Documentation
------------------ | ----------------------------------------------------------- | --------------------
payment            | /v1/payments/[ID]?access\_token=[ACCESS\_TOKEN] | [see documentation](https://www.mercadopago.com.ar/developers/en/reference/payments/_payments_id/get/)
chargebacks    	   | /v1/chargebacks/[ID]?access\_token=[ACCESS\_TOKEN]| -
merchant_orders    | /merchant\_orders/[ID]?access\_token=[ACCESS\_TOKEN]           | [see documentation](https://www.mercadopago.com.ar/developers/en/reference/merchant_orders/_merchant_orders_id/get/)

### Merchant_orders notifications

**If you are integrating in-person payments**, we recommend to use topic `merchant_order` IPN notifications. To do this, bear in mind the rules below:

1. The `merchant_order` status field will remain **open** if there are no associated payments or, otherwise, if they are rejected or approved for an amount lower than total order amount.
2. The `merchant_order` status field will be **closed** when the sum of approved payments is equal to or higher than total order amount.

You will find all the payments in the order, under the payments object. [To make refunds](https://www.mercadopago.com.ar/developers/en/guides/manage-account/cancellations-and-refunds/), it is important to get the id of payments with `status` = **approved**.


> WARNING
>
> WARNING
>
> When the `merchant_order` is **closed**, check that the sum of payments with approved status is equal to or higher than total order amount.


### Implement the notification receiver using the following code as example:

```php
<?php
	MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

	$merchant_order = null;

	switch($_GET["topic"]) {
		case "payment":
			$payment = MercadoPago\Payment::find_by_id($_GET["id"]);
			// Get the payment and the corresponding merchant_order reported by the IPN.
			$merchant_order = MercadoPago\MerchantOrder::find_by_id($payment->order->id);
			break;
		case "merchant_order":
			$merchant_order = MercadoPago\MerchantOrder::find_by_id($_GET["id"]);
			break;
	}

	$paid_amount = 0;
	foreach ($merchant_order->payments as $payment) {	
		if ($payment['status'] == 'approved'){
			$paid_amount += $payment['transaction_amount'];
		}
	}
	
	// If the payment's transaction amount is equal (or bigger) than the merchant_order's amount you can release your items
	if($paid_amount >= $merchant_order->total_amount){
		if (count($merchant_order->shipments)>0) { // The merchant_order has shipments
			if($merchant_order->shipments[0]->status == "ready_to_ship") {
				print_r("Totally paid. Print the label and release your item.");
			}
		} else { // The merchant_order don't has any shipments
			print_r("Totally paid. Release your item.");
		}
	} else {
		print_r("Not paid yet. Do not release your item.");
	}
	
?>
```

> To get your `ACCESS_TOKEN`, check the [Credentials]([FAKER][CREDENTIALS][URL]) section.

## Order Search

**If you are integrating in-person payments**, order search using its `external_reference` as search criterion should be implemented as a contingency measure.


```curl
curl -X GET https://api.mercadopago.com/merchant_orders?external_reference=$EXTERNAL_REFERENCE&access_token=$ACCESS_TOKEN -d
```

Find more information in [API Reference](https://www.mercadopago.com.ar/developers/en/reference/merchant_orders/_merchant_orders_search/get/).

There are two ways to implement **search** by `external_reference`:

| Ways	|	Description		|
| ----------- | ----------------- |
| **Manual** | The point of sale should include a search button.|
| **Automatic** | After a reasonable time without getting any notification, order search begins, for example, at 5-second intervals. |

Each QR scanning generates a different `merchant_order`. Consider that, if a customer scans more than once, an order will remain **open** indefinitely. To close the transaction, you should take the `merchant_order` with `status` = **closed**.

If the search is made **after QR scanning**, all order-related data will be shown:

```json
{
  "id": 1126664483,
  "status": "closed",
  "payments": [
     {
      "id": 4996721469,
      "transaction_amount": 4,
      "status": "rejected",
      [...],
    },
     {
      "id": 4996721476,
      "transaction_amount": 4,
      "status": "approved",
      [...], }, 
```

Otherwise, if the order posted QR has **not been scanned yet**, the answer will be:

```json
{
   "elements": null,
   "next_offset": 0,
   "total": 0
 }
```

> WARNING
>
> CAUTION
>
> To approve the integration of in-person payments, Mercado Pago requires the implementation of notifications (IPN) as main method. Order search by `external_reference` should be used only as a contingency measure in the event of no notifications.

## Receive only one type of notification

If you want to receive notifications only from IPN, and not from Webhooks, you can add in the *notification_url* the parameter `source_news=ipn`. For example:

`https://www.yourserver.com/notifications?source_news=ipn`

> And don't worry, the change doesn't affect the parameters already included in the URL.


