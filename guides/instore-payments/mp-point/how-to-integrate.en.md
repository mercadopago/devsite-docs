---
sites_supported:
  - mla
  - mlb
  - mlm
  - global
---


# How to integrate Mercado Pago Point

In order to get paid in an integrated manner with our Point device, you need to download the Mercado Pago app available in the iOS and Android marketplaces.

Currently, it is possible to perform an integration from any type of external application that can be accessed from the same device where the seller has the Point app installed:

- Native mobile app for Android or iOS.
- Hybrid mobile app.
- Web app.


> WARNING
>
> Prerequisites
>
> * Have the Mercado Pago app (2.34+ for Android y 2.32+ for iOS).
> * Have a Point device linked to the Mercado Pago account.
> * The seller must be logged in with its Mercado Pago account in the Mercado Pago Point app.
> * Available for Android version 2.8.0 or above, iOS version 1.7.0 or above and only when running on iOS 9 or above.

## Flowchart

![instore diagram](/images/point_diagram.png)

## 1. Integration via Deep Linking


One of the alternatives to integrate with Mercado Pago Point is through a deep link. When this _link_ is accessed, it will be intercepted as a  _Point-handled address_.

In the request to this _link_, different parameters can be sent, which will be verified by the Mercado Pago app and impacted in the payment. Once the request to this link is made, the seller will be redirected to the Mercado Pago Point app to enter the customer’s card and thus charge the customer.

Once the payment is processed, the user will be redirected to the `success_url` or `fail_url`, depending on the payment status. This must be intercepted in order to return the user to the application flow.


### Creating Deep Linking

The URL to be intercepted is `https://www.mercadopago.com/point/integrations`

The parameters you need to include are:

* `amount`: The amount that will be charged to the customer (\*).
* `description`: A description of the transaction (Max.: 20 characters)  (\*).
* `external_reference`: The reference code of your system, the same one that will allow you to conciliate your purchase order with the payment.
* `notification_url`: The URL where you will receive the notification of that payment.
* `payer_email`: The payer’s email.
* `success_url`: The URL to which the user will be redirected after an approved payment.
* `fail_url`: The URL to which the user will be redirected after a declined payment.

> WARNING
>
> * Required fields marked with an asterisk (\*).

In the [GitHub](https://github.com/mercadopago/point-android_integration#deep-linking) section, you can find more information and the corresponding example.

## 2. Integration via Intent-Based
> WARNING
>
> * This integration is only available for Android version 2.8.0 or above.


The other way to integrate with the Mercado Pago app is using a native Android code, based on the _Intent-Based_ concept.

You must use the “startActivityForResult” method to directly start the payment process. The payment result will return as “activityResult”.

It is very important that the code considers the possibility that the user does not have the Mercado Pago app installed on the device. In this case, we recommend redirecting the user to the Play Store to download it.

As a reference, you can use the sample code and documentation that has the format that allows sending the payment information and handling the return object.

In the [GitHub](https://github.com/mercadopago/point-android_integration#intent) section, you can find more information and the corresponding example.


## 3. Payment Notifications

You need to send your `notification_url`, where you will receive a notification of all new payments and status updates generated.
For more information, go to the [notifications](/guides/notifications/ipn.es.md) section.

## 4. Identifying Point Payments

Point payments are identified within payments API, for further information check the [API reference](/reference/payments/_payments_id/get/).

There is a Point exclusive API which provides additional information about the payment:
`https://api.mercadolibre.com/point/services/payment/<payment_id>?access_token=<access_token>`

The answer will have the following format:

`{
  "payment_id": 12345,
  "caller_id": 44444,
  "poi": "BBPOS-123123123",
  "poi_type": "BBPOS",
  "operator_id": 555555,
  "buyer_info": {
    "email": "email@email.com"
  }
}`
