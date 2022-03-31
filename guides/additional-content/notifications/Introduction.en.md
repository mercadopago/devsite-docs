# Notifications

Notifications are messages sent by the Mercado Pago server from events carried out in your application. You can configure your integration to send notifications when the following events happen:

* Creation and updating of payments;
* Creation of orders;
* Update of the order;
* Linking to a subscription plan;
* Subscription link;
* Linking and unlinking mp-connect accounts;
* Invoice binding (invoice);
* Creation of countercharges;
* Finalization and cancellation of paid intent;
* Error while processing payment intent.

There are **two types** of notifications available for configuration which ,once configured, allow you to program your store's backend to, for example, update the status of orders when a payment is created, send an order confirmation email from store when an order is updated on Mercado Pago, update a customer's record when a subscription plan is linked, or any other actions arising from the events listed above.


| Type | Description |
| --- | --- |
| **Webhooks** | It uses HTTP REST and instantly notifies updates. To learn how to configure webhook notifications [click here](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/webhooks/webhooks). |
| **IPN** | The notification may take a few moments to send. To learn how to configure IPN notifications [click here](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn/introduction). |