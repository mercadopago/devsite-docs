# IPN notifications for face-to-face payments

## Introduction

The IPN (instant payment notification) is a notification that is sent from a Mercado Pago server to a server made available by you through an `HTTP POST` call with information on your transactions.

To receive notifications of events on your platform, you can previously configure a url to which Mercado Pago has access from the `notification_url` attribute when creating the order you wish to charge.

## Notification flow

To understand the payment confirmation process we can divide the entire process into 2 parts:

1. Notification event
2. Order inquiry

## Events

> WARNING 
> 
> Important
> 
> An event is any type of update on the notified object, including changes of status or attributes.

We notify events related to your orders (`merchant_order`) or payments received (` payment`).

The `merchant_order` is an entity that groups both payments and withdrawals. You will have to consult the data of the orders that are notified to you.

Whenever an event occurs related to any of the mentioned resources, we will send you a notification using `HTTP POST` to the` notification_url` you specified.

The events that are notified are the following:


1. **Register the Merchant Order (MO).** When scanning a QR that contains an amount, it will automatically create a merchant order, sending a notification (if the same QR is scanned several times, each one will create a different merchant order and therefore a new notification, the integration must take into account this scenario).
2. **Payments Update.** Each payment attempt by the client will update the information of the merchant order and send a notification.
3. **Closure of the MO.** Once an approved payment is made, the MO status will appear closed and a notification will be sent.

If the server is not available or delays in responding more than 22 seconds, Mercado Pago will retry to notify periodically following the following scheme:

Event | Term after the first shipment | Confirmation timeout
----------------- | ----------------- | -----------------
Shipment | - | 22 seconds
First attempt | 30 seconds | 5 seconds
Second intento | 5 minutes | 5 seconds
Third intento | 30 minutes | 5 seconds

Mercado Pago will inform this `notification_url` both in the creation and update of the status of payments or orders with two parameters:

Field | Description
----------------- | -----------------
“topic” | Identifies what it is about. It can be  `payment` or `merchant_order`
“id” | It is a unique identifier of the reported resource.

Example: If you set the notification_url: `https: // www.yoursite.com / notifications`, you will receive payment notifications like this:`https://www.yoursite.com/notifications?topic=merchant_order&id=123456789`

## What should I do when I receive a notification?

When you receive a notification at your POS, Mercado Pago waits for a response to validate that you received it correctly. For this, you must return an `HTTP STATUS 200 (OK)` or `201 (CREATED)`.

Remember that this communication is exclusively between Mercado Pago servers and your server, so there will not be a physical user seeing any type of result.

For face-to-face payments, we recommend using IPN notifications from topic `merchant_order` since they are optimized for this type of product. To do this, keep in mind the following rules:

1.  The `status` field of the` merchant_order` will remain in ** opened ** when it does not yet have associated payments, or it has them and they are rejected or approved for an amount less than the total of the order.

2. The `status` field of the` merchant_order` will be ** closed ** when the sum of the approved payments equals the total of the order.

Inside the order, in the payments object, you will find all the payments for it. It is important to obtain the id of the payments with `status` = ** approved ** in order to make refunds.


> WARNING 
> 
> Important
> 
> Mercado Pago indicates to integrations that use this IPN notification method as the main method to receive payment notifications.

## Query through GET to Merchant Orders

To be able to consult the status of the orders through the topic merchant order you will need to make a GET using the id that you received in the notification server to the following endpoint:

```curl
curl --location --request GET 'https://api.mercadopago.com/merchant_orders/MERCHANT_ORDER_ID' \
--header 'Authorization: Bearer ACCESS_TOKEN'
```

Whose response will be the following:

```json
{
 "id": 1126664483,
 "status": "closed",
 "payments": [
    {
     "id": 4996721469,
     "transaction_amount": 4,
     "status": "rejected"
   },
    {
     "id": 4996721476,
     "transaction_amount": 4,
     "status": "approved"
   }
   ...
 ]
}
```
Remember that the `status` field of the` merchant_order` will be ** closed ** when the sum of the approved payments is equal to the total of the order.

Within the MO, in the payment object, you will find all the payments made, whether approved or rejected. It is important to obtain the ID of the payments with approved status in order to be able to make chargebacks / refunds.

## Get to Payments

If you require more information about payments you can use the payment ID to obtain a more detailed response

```curl
curl --location --request GET 'https://api.mercadopago.com/v1/payments/PAYMENT_ID' \
--header 'Authorization: Bearer ACCESS_TOKEN'
```

When querying this service you will get a response like the following:

```json
{
  "acquirer": null,
  "acquirer_reconciliation": [],
  "additional_info": {
    "authentication_code": null,
    "available_balance": null,
    "nsu_processadora": null,
    "poi_id": null,
    "tracking_id": "platform:v1-blacklabel,so:ALL,type:N/A,security:2fa"
  },
  "api_version": "2",
  "application_id": 1311377052931992,
  "authorization_code": null,
  "available_actions": [
    "refund"
  ],
  "binary_mode": true,
  "brand_id": null,
  "call_for_authorize_id": null,
  "captured": true,
  "card": {},
  "charges_details": [],
  "client_id": "1311377052931992",
  "collector": {
    "email": "user+826213799@vendedor.com",
    "first_name": "Test",
    "id": 826213799,
    "identification": {
      "number": "CUPU800825569",
      "type": "RFC"
    },
    "last_name": "Test",
    "operator_id": null,
    "phone": {
      "area_code": "01",
      "extension": null,
      "number": "1111-1111"
    }
  },
  "collector_id": 826213799,
  "collector_tags": [],
  "contingencies": {
    "list": [],
    "status": "none"
  },
  "corporation_id": null,
  "counter_currency": null,
  "coupon_amount": 0,
  "coupon_id": null,
  "currency_id": "MXN",
  "date_approved": "2021-12-02T19:13:41.000-04:00",
  "date_created": "2021-12-02T19:13:41.000-04:00",
  "date_last_updated": "2021-12-02T19:13:41.000-04:00",
  "date_of_expiration": null,
  "deduction_schema": null,
  "description": "B06 Glorias",
  "differential_pricing_id": null,
  "external_reference": "001-1192919",
  "fee_details": [],
  "financing_type": null,
  "id": 18560680076,
  "installments": 1,
  "integrator_id": null,
  "internal_metadata": {
    "app_version": "2.196.2.0",
    "hide_payer_information": true,
    "in_store_flow": "attended",
    "internal_risk_analysis": "by_risk",
    "pos_id": "36540388",
    "rule_engine": {
      "rules": [
        {
          "rule_id": 21000005210,
          "rule_set": "processing_fee_and_release"
        }
      ],
      "valid_promise": false,
      "with_promise": false
    },
    "subtype": "store",
    "type": "qr",
    "user_location": {
      "latitude": 20.4999472,
      "longitude": -103.4148599
    }
  },
  "is_test": true,
  "issuer_id": null,
  "live_mode": true,
  "marketplace": "NONE",
  "marketplace_owner": null,
  "merchant_account_id": null,
  "merchant_number": null,
  "metadata": {},
  "money_release_date": "2021-12-02T19:13:41.000-04:00",
  "money_release_days": 0,
  "money_release_schema": null,
  "notification_url": null,
  "operation_type": "regular_payment",
  "order": {
    "id": "3701439528",
    "type": "mercadopago"
  },
  "payer": {
    "email": "prueba+694333235@comprador.com",
    "entity_type": null,
    "first_name": "Test",
    "id": "694333235",
    "identification": {
      "number": "CUPU800825569",
      "type": "RFC"
    },
    "last_name": "Test",
    "operator_id": null,
    "phone": {
      "area_code": "01",
      "extension": null,
      "number": "1111-1111"
    },
    "type": "registered"
  },
  "payer_id": 694333235,
  "payer_tags": [],
  "payment_method_id": "account_money",
  "payment_type_id": "account_money",
  "platform_id": null,
  "point_of_interaction": {
    "business_info": {
      "sub_unit": "qr",
      "unit": "wallet"
    },
    "type": "UNSPECIFIED"
  },
  "pos_id": "36540388",
  "processing_mode": "aggregator",
  "product_id": "bh31umv10flg01nmhg60",
  "profile_id": null,
  "refunds": [],
  "reserve_id": "3671589532",
  "risk_execution_id": 505395628142,
  "shipping_amount": 0,
  "site_id": "[FAKER][GLOBALIZE][UPPER_SITE_ID] ",
  "splitter_id": null,
  "sponsor_id": null,
  "statement_descriptor": null,
  "status": "approved",
  "status_detail": "accredited",
  "store_id": "43633322",
  "taxes_amount": 0,
  "transaction_amount": 39,
  "transaction_amount_refunded": 0,
  "transaction_details": {
    "acquirer_reference": null,
    "external_resource_url": null,
    "financial_institution": null,
    "installment_amount": 0,
    "net_received_amount": 39,
    "overpaid_amount": 0,
    "payable_deferral_period": null,
    "payment_method_reference_id": null,
    "total_paid_amount": 39
  },
  "transaction_id": null,
  "version": 0
}
```

## Contingency

If not receive notifications, it will be necessary to apply ar as a contingency method the search on demand using the external_reference of the order as search criteria. It can be done through two mechanisms:

Ways | Description
----------------- | -----------------
Manual | The point of sale must include a button to perform the search.
Automatic | After 30 seconds without receiving any notification, an order search starts at every interval of, for example, 5 seconds.

For any of the mechanisms described above we will use the endpoint:

```curl
curl --location --request GET 'https://api.mercadopago.com/merchant_orders?external_reference=EXTERNAL_REFERENCE' \
--header 'Authorization: Bearer ACCESS_TOKEN'
```

The answer will be the same as using the order ID and they must use the same criteria mentioned above to confirm the payment of the order.

If the QR on which the order was published has not been scanned, the response will be:


```json
{
  "elements": null,
  "next_offset": 0,
  "total": 0
}
```

> WARNING 
> 
> Important
> 
> From Mercado Pago we require to standardize the integration of face-to-face payments that have the notification (IPN) to Merchant Orders implemented as their main method. The order search by `external_reference` should be used only as a contingency in the event that no notifications are received.


## Additional Tools


## Search to payments


In case you require a list of the payments made, you can use the following resource:


```curl
curl --location --request GET 'https://api.mercadopago.com/v1/payments/search?limit=30&range=date_created&begin_date=2019-8-4T00:00:00.001-04:00&end_date=2021-12-4T23:59:59.999-04:00&sort=date_created&criteria=desc' \
--header 'Authorization: Bearer ACCESS_TOKEN'
```

You can use body parameters of a payment as query params to be able to filter the results:

- begin date: begin date for searching
- end date: end date for searching
- status: payment status
