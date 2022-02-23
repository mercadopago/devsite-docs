## Crear cancelación

Cancelar una compra para un pago específico.

[[[
```ruby
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')
 
payment_data = {
   "status": "cancelled"
}
payment = sdk.payment.update("payment_id", payment_data)

```
]]]