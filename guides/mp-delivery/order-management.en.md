# Order management

Order management is done through REST APIs, with which you can perform actions depending on the current status of the order.

Changes in the status of the order, from the moment of creation to the completion of delivery, will be notified via webhook containing the `resource` and the `user_id` in its body.

The `resource` attribute returns the `shipment_id` that will be used for any operation involving the order and the `user_id` attribute returns the user ID of the store that received the order.

With `shipment_id` in hand you can:

* Get order data.
* Accept orders.
* Print the order receipt.
* Cancel the order.

## State flow diagram

![flowchart](/images/mpdelivery/flowchart_delivery_en.png)

> PREV_STEP_CARD_EN
>
> Integration setup
>
> Learn how to configure the integration with Mercado Pago Delivery.
>
> [Integration setup](/developers/en/docs/mp-delivery/integration-configuration)

> NEXT_STEP_CARD_EN
>
> Get order data
>
> Learn how to get order data with Mercado Pago Delivery.
>
> [Get order data](/developers/en/docs/mp-delivery/order-management/get-order-data)
