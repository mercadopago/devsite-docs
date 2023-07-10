# After receiving the notification

[TXTSNIPPET][/guides/snippets/test-integration/notification-response]

After returning the notification, you will get the full information of the notified resource by going to the corresponding API endpoint:

| Type | URL | Documentation |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [check documentation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments_id/get) |
| chargebacks | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [check documentation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/chargebacks/_chargebacks_id/get) |
| merchant_orders | `https://api.mercadopago.com/merchant_orders/[ID]` | [check documentation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/merchant_orders/_merchant_orders_id/get) |

Also, specifically in fraud alerts, the order must not be delivered and the cancellation needs to be done through the [cancellations API](/developers/en/reference/chargebacks/_payments_payment_id/put).

In the notification, you will receive a `JSON` with the following information containing the payment id to cancel.

[[[
```Json

  "description": ".....",
  "merchant_order": 4945357007,
  "payment_id": 23064274473

```
]]]

> NOTE
>
> Important
>
> You can also get more order information using the [Get order](/developers/en/reference/merchant_orders/_merchant_orders_id/get) api.



<br>

With this information, you will be able to carry out the necessary updates to your platform, such as updating an approved payment or a closed order.

