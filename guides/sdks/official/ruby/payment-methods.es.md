## Obtener medios de pago

Consulta todos los medios de pago disponibles y obtén un listado con el detalle de cada uno y sus propiedades.

[[[
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_methods_response = sdk.payment_methods.get()
payment_methods = payment_methods_response[:response]

```
]]]