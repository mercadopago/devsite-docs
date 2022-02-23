# Notification events

An event is any type of update on the notified object, including changes of status or attributes.

We notify events related to your orders (`merchant_order`) or payments received (`payment`).

The `merchant_order` is an entity that groups both payments and withdrawals. You will have to consult the data of the orders that are notified to you.

Whenever an event occurs related to any of the mentioned resources, we will send you a notification using `HTTP POST` to the `notification_url` you specified.

The following events are notified:

1. **Register the Merchant Order (MO).** When scanning a QR that contains an amount, it will automatically create a merchant order, sending a notification (if the same QR is scanned several times, each one will create a different merchant order and therefore a new notification, the integration must take into account this scenario).
2. **Payments Update.** Each payment attempt by the client will update the information of the merchant order and send a notification
3. **Closure of the MO.** Once an approved payment is made, the MO status will appear closed and a notification will be sent 

**If the server is not available or delays in responding more than 22 seconds**, Mercado Pago will retry to notify periodically following the following scheme:

|Event|Term after the first shipment|Confirmation timeout|
|---|---|---|
|Shipment| - |22 seconds|
|First attempt|30 seconds|5 seconds|
|Second attempt|5 minutes|5 seconds|
|Third attempt|30 minutes|5 seconds|

Mercado Pago will inform this `notification_url` both when creating and updating payment or order statuses with two parameters:

|Field|Description|
|---|---|
|`topic`|Identifies what it is about. It can be `payment` or `merchant_order`.|
|`id`|It is a unique identifier of the reported resource.|


> **Example:** If you set the `notification_url`: `https://www.yoursite.com/notifications`, you will receive payment notifications like this: `https://www.yoursite.com/notifications?topic=merchant_order&id=123456789`


## When receiving a notification

**When you receive a notification at your POS, Mercado Pago waits for a response to validate that you received it correctly**. For this, you must return an `HTTP STATUS 200 (OK)` or `201 (CREATED)`.

Remember that this communication is exclusively between Mercado Pago servers and your server, so there will not be a physical user seeing any type of result.

For in person payments, we recommend using IPN notifications from topic `merchant_order` since they are optimized for this type of product. To do this, keep in mind the following rules:

1. The `status` field of the `merchant_order` will remain as **opened** when it does not yet have associated payments, or if it has them and they are rejected or approved for an amount that is less than the total of the order.
2. The `status` field of the `merchant_order` will be **closed** when the sum of the approved payments equals the total of the order.

Inside the order, in the payments object, you will find all the payments for it. It is important to obtain the id of the payments with `status` = **approved** in order to make refunds.

> WARNING
>
> Important
>
> Mercado Pago requests for integrations to use this IPN notification method as the main method to receive payment notifications.

> PREV_STEP_CARD_EN
>
> Configure in person payment notifications
>
> Configure notifications for QR code payments.
>
> [Configure in person payment notifications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn/inperson-configuration)

> NEXT_STEP_CARD_EN
>
> Merchant order query
>
> Consult the orders status.
>
> [Merchant order query](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn/inperson-order-query)
