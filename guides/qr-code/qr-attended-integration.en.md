# How to integrate the QR Attended Model

To charge with a QR Attended Model, you need to create an order and associate it with a Point of Sale.

## Model flow

This is how the attended model works:

![Payment flow at QR Mercado Pago POS](mobile/qr-user-flow.en.png)

1. The store registers a sale (1a) and creates an order assigned to the point of sale (1b). The order is then available for scanning (2).
2. When the customer scans the order QR (3) and completes the payment (5), Mercado Pago sends an IPN notification (4a and 6b) to the seller's server. This data is processed to obtain the order status (7a), validating whether it is closed or still opened with pending payment.

## Create an order

For more information on how to create orders access our [API Reference](/developers/en/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put).

----[mco]----
> If you must pay taxes for the products in your order, visit the [Considerations IVA Colombia section](/developers/en/guides/additional-content/localization/iva-colombia).
------------
The order is available for **scanning and payment** after its creation.

> NOTE
>
> Note
>
> Remember that if you have not previously uploaded your business name or logo in [your Mercado Pago account,](https://www.mercadopago.com.ar/settings/account) the order title and image showcased to the client in the App will correspond to the item uploaded first.

## Eliminate an order

For more information on how to delete the order associated with a QR before its expiration, or closing, see our [API Reference](/developers/en/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_pos_external_pos_id_orders/delete).

> The response will be an `HTTP 204 No Content`.

## Receive notifications of your orders

An IPN (Instant Payment Notification) notification is an **automatic message that notifies the creation of new orders and their status updates**. I.e.: If an order is approved, rejected, or pending.

Go to [IPN notifications](/developers/en/docs/qr-code/additional-content/your-integrations/notifications/ipn) to learn how to implement them, more specifically the `merchant_order` notifications, which are the ones associated with orders. You will be able to identify each one of theses orders by the `external_reference` parameter.

> NOTE
>
> Note
>
> You can check our [tutorial video on how to integrate an attended model QR Code](/developers/en/docs/qr-code/resources/tutorial-videos/qr-videos-attended).