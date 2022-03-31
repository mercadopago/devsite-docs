# Configuration

The **integration of payment with QR code** uses the object `merchant_order`, which is the identification of the order based on each reading performed on the QR.

In IPN notifications for in-person payments, the `status` field of the `merchant_order` will remain with the status **opened** until approved payments are identified and the payment amount is equal to or greater than the order total.

Within the order, in the payments object, you will find all payments made, whether approved or rejected. It is important to obtain the ID of payments with **approved** status in order to carry out chargebacks/refunds.

For each QR scan a different `merchant_order` is generated. Remember that if the customer does more than one scan, an order will be **opened** indefinitely and, to close the transaction, the `merchant_order` must have `status` = **closed**.

**To receive notifications of events on your platform**, you can previously configure a url to which Mercado Pago has access from the `notification_url` attribute when creating the order you wish to charge.

## Notification flow

The payment confirmation process is divided in two parts:

1. [Notification events](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/ipn/inperson-notification-events)
2. [Merchant order query](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/ipn/inperson-order-query)

