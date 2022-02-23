## Criar reembolso total

Criar um reembolso total para um pagamento específico. 

[[[
```ruby
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')
 
sdk.refund.create("payment_id")
```
]]]

## Criar reembolso parcial

Criar um reembolso parcial para um pagamento específico. 

[[[
```ruby
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')
 
data = {
 amount: 0.0
}
 
refund = sdk.refund.create('payment_id', refund_data: data)
```
]]]

## Obter reembolso específico

Consultar reembolso específico de determinado pagamento.

[[[
```ruby
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
result = sdk.refund.list(payment_id)
refunds = result[:response]
```
]]]