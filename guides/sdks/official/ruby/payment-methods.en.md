## Get payment methods

Consult all the available payment methods and obtain a list with the details of each one and its properties.

[[[
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_methods_response = sdk.payment_methods.get()
payment_methods = payment_methods_response[:response]

```
]]]