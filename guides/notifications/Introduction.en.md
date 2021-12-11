# Notifications

Notifications are messages sent by the Mercado Pago server from events carried out in your application. You can configure your integration to send notifications when the following events happen:

* Creation of payments
* Payment update
* Creating orders
* Order update
* Linking to a subscription plan
* Subscription binding
* Linking mp-connect accounts
* Unlinking mp-connect accounts
* Invoice binding (Invoice)
* Creation of chargebacks

There are **two types** of notifications available for configuration, which once configured, allow you to program your store's backend to, for example, update the status of orders when a payment is created, send an order confirmation email from store when an order is updated on Mercado Pago, updating a customer's record when a subscription plan is linked, or any other actions arising from the events listed above.


| Type | Description |
| --- | --- |
| **Webhooks** | It uses HTTP REST and instantly notifies updates. To learn how to configure webhook notifications [click here](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/webhooks). |
| **IPN** | The notification may take a few moments to send. To learn how to configure IPN notifications [click here](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn). |