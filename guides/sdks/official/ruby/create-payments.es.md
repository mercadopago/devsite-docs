## Crear pago

Es posible crear y agregar información de pago utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API [Crear pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments/post).


[[[
```ruby

require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  token: 'ff8080814c11e237014c1ff593b57b4d',
  installments: 1,
  transaction_amount: 100,
  payer: {
    type: 'customer',
    id: '123456789-jxOV430go9fx2e'
  }
}
payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]

```
]]]