## Crear reembolso total

Puede crear un reembolso total con el SDK a continuación. Para detalles sobre los parámetros de solicitud, consulta la API [Crear reembolsos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_payments_id_refunds/post). 

[[[
```ruby
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')
 
sdk.refund.create("payment_id")
```
]]]

## Crear reembolso parcial

Puede crear un reembolso parcial con el SDK a continuación. Para detalles sobre los parámetros de solicitud, consulta la API [Crear reembolsos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_payments_id_refunds/post).

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

Puede obtener reembolsos específicos para ciertos pagos utilizando el SDK a continuación. Para detalles sobre los parámetros de solicitud, consulta la API de [Obtener reembolso específico](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_payments_id_refunds_refund_id/get).

[[[
```ruby
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
result = sdk.refund.list(payment_id)
refunds = result[:response]
```
]]]