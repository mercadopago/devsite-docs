# Notifications

Notifications are messages sent by the Mercado Pago server based on events that occur in your application. To receive these notifications, you must activate different notification topics either through the [Your Integrations](/developers/panel/app) or when creating a payment. These notifications will inform you about the various events that have occurred. 

The activation of these topics will depend on the Mercado Pago solution you have integrated and your business needs, as shown in the following table:

| Events | Name in Your Integrations | Topic | Associated products |
|---|---|---|---|
| Creation and update of payments | Payments | `payment` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Pro<br>Checkout Bricks<br>Subscriptions<br>----[mla, mlm, mlb]----Mercado Pago Point------------<br>Wallet Connect |
| Recurring payment of a subscription (creation - update) | Plans and Subscriptions | `subscription_authorized_payment` | Subscriptions |
| Subscription linking (creation - update) | Plans and Subscriptions | `subscription_preapproval` | Subscriptions |
| Subscription plan linking (creation - update) | Plans and Subscriptions | `subscription_preapproval_plan` | Subscriptions |
| Linking and unlinking of accounts connected via OAuth | Application linking | `mp-connect` | All products that have implemented OAuth |
----[mla, mlm, mlb]----| Completion and cancellation of payment attempt, or error processing payment attempt from Mercado Pago Point devices. | Point Integrations | `point_integration_wh` / `point_integration_ipn` | Mercado Pago Point |------------
| Wallet Connect transactions | Wallet Connect | `wallet_connect` | Wallet Connect |
| Fraud alerts after order processing | Fraud alerts | `stop_delivery_op_wh` / `delivery_cancellation` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Pro |
| Creation of refunds and claims | Claims | `topic_claims_integration_wh` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Pro<br>Checkout Bricks<br>Subscriptions<br>----[mla, mlm, mlb]----Mercado Pago Point------------<br>QR Code<br>Wallet Connect |
| Retrieval of card information and update within Mercado Pago | Card Updater | `topic_card_id_wh` | Checkout Pro<br>Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Bricks |
| Creation, closure, or expiration of commercial orders | Commercial orders | `topic_merchant_order_wh` / `merchant_order` | Checkout Pro<br>QR Code  |
| Opening of chargebacks, status changes, and modifications related to the release of funds | Chargebacks | `topic_chargebacks_wh` / `chargebacks` | Checkout Pro<br>Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Bricks |
----[mla]----| Creation, update, or cancellation of orders. | Delivery (proximity marketplace) | `delivery` | MP Delivery |------------

Once configured, notifications allow you to program your store's backend to, for example, update the status of orders when a payment is created, send a confirmation email when an order is updated in Mercado Pago, update a customer's record when a subscription plan is linked, among other actions resulting from the events detailed in the table above.

There are two types of notifications available for configuration, as detailed in the table below.

| Type | Description |
| --- | --- |
| **Webhooks** | **Recommended**. Uses HTTP REST to instantly notify updates and provides greater integration security through a secret signature, a validation method that ensures notifications received were sent by Mercado Pago.<br> To learn how to configure and simulate the sending of Webhooks notifications, read the [Webhooks documentation](/developers/en/guides/additional-content/your-integrations/webhooks). |
| **IPN** | Allows your application to receive notifications from Mercado Pago about the status of a payment, chargeback, or *merchant order* via an HTTP POST call. Note that notifications may take a few moments to be sent and do not allow validation via the `x-Signature` header.<br> **Important:** IPN notifications will be discontinued soon. Therefore, we recommend using [Webhooks notifications](/developers/en/guides/additional-content/your-integrations/webhooks). |