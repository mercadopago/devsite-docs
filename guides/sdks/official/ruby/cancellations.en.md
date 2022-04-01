## Create cancellation

It is possible to cancel a specific purchase from the payment ID using the SDK below. For details on request parameters, check the [Cancellation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/chargebacks/_payments_payment_id/put) API.

[[[
```ruby
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')
 
payment_data = {
   "status": "cancelled"
}
payment = sdk.payment.update("payment_id", payment_data)

```
]]]