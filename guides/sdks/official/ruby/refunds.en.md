## Create full refund

Create full refund for a specific payment. 

[[[
```ruby
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')
 
sdk.refund.create("payment_id")
```
]]]

## Create partial refund

Create a partial refund for a specific payment. 

[[[
```ruby
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')
 
data = {
 amount: 0.0
}
 
refund = sdk.refund.create('payment_id', refund_data: data)
```
]]]

## Get specific refund

Get a specific Refund from a specific payment.

[[[
```ruby
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
result = sdk.refund.list(payment_id)
refunds = result[:response]
```
]]]


