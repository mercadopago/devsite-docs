# Create full refund

You can create a full refund using the SDK below. For details on the request parameters, check the [Create refund](/developers/en/reference/chargebacks/_payments_id_refunds/post) API.

[[[
```ruby
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')
 
sdk.refund.create("payment_id")
```
]]]

# Create partial refund

You can create a partial refund using the SDK below. For details on the request parameters, check the [Create refund](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/chargebacks/_payments_id_refunds/post) API. 

[[[
```ruby
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')
 
data = {
 amount: 0.0
}
 
refund = sdk.refund.create('payment_id', refund_data: data)
```
]]]

# Get specific refund

You can get a specific refund of certain payments using the SDKs below. For details on the request parameters, check the [Get specific refund](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/chargebacks/_payments_id_refunds_refund_id/get) API.

[[[
```ruby
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
result = sdk.refund.list(payment_id)
refunds = result[:response]
```
]]]