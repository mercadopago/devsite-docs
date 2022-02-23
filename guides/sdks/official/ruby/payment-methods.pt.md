## Obter meios de pagamento

Consulte todas as formas de pagamento disponíveis e obtenha uma lista com os detalhes de cada uma delas e suas propriedades.


[[[
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_methods_response = sdk.payment_methods.get()
payment_methods = payment_methods_response[:response]

```
]]]