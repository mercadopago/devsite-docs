# Merchant order query

To be able to consult the status of the orders through the topic merchant order you will need to make a GET using the **ID** that you received in the notification server.

Please find all the information you need about the request and response parameters in our [API reference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/merchant_orders/_merchant_orders_id/get) documentation.

> NOTE
>
> Note
>
> Remember that the `status` field of the `merchant_order` will only be **closed** when the sum of the approved payments is equal to the total of the order.

Within the MO, in the payment object, you will find all the payments made, whether approved or rejected. It is important to obtain the ID of the payments with approved status in order to be able to make chargebacks/refunds.

## Get a payment

If you require more information about payments you can use the **payment ID** to obtain a more detailed response.

Please find all the information you need about the request and response parameters in our [API reference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments_id/get) documentation.

> PREV_STEP_CARD_EN
>
> Notification events
>
> Learn about notification events.
>
> [Notification events](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn/inperson-notification-events)

> NEXT_STEP_CARD_EN
>
> Troubleshooting
>
> Learn what to do when you don't receive notifications.
>
> [Troubleshooting](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn/troubleshooting)