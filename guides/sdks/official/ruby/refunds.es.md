## Crear reembolso total

Crear reembolsos totales para un pago específico. 

[[[
```ruby
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')
 
sdk.refund.create("payment_id")
```
]]]

## Crear reembolso parcial

Crear reembolsos parciales para un pago específico.

[[[
```ruby
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')
 
data = {
 amount: 0.0
}
 
refund = sdk.refund.create('payment_id', refund_data: data)
```
]]]

## Obtener reembolso específico

[[[
```ruby
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
result = sdk.refund.list(payment_id)
refunds = result[:response]
```
]]]