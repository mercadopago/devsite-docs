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
* [Fraud allerts](/developers/en/docs/additional-content/chargebacks/how-to-prevent#bookmark_fraud_alert)

There are **two types** of notifications available for configuration which ,once configured, allow you to program your store's backend to, for example, update the status of orders when a payment is created, send an order confirmation email from store when an order is updated on Mercado Pago, update a customer's record when a subscription plan is linked, or any other actions arising from the events listed above.

| Type | Description |
| --- | --- |
| **Webhooks** | It uses HTTP REST, instantly notifies updates and enhances security in your integration through the **secret signature**, a validation method to ensure that received notifications were sent by Mercado Pago. </br> To learn how to configure Webhooks notifications [click here](/developers/pt/guides/additional-content/your-integrations/webhooks). |
| **IPN** | The notification may take a few moments to send. To learn how to configure IPN notifications [click here](/developers/pt/guides/additional-content/your-integrations/ipn). |