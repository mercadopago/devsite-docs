# After receiving the notification

[TXTSNIPPET][/guides/snippets/test-integration/notification-response]

After returning the notification, you will get the full information of the notified resource by going to the corresponding API endpoint:

| Type | URL | Documentation |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [check documentation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments_id/get) |
| chargebacks | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [check documentation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/chargebacks/_chargebacks_id/get) |
| merchant_orders | `https://api.mercadopago.com/merchant_orders/[ID]` | [check documentation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/merchant_orders/_merchant_orders_id/get) |

With this information, you will be able to carry out the necessary updates to your platform, such as updating an approved payment or a closed order.

