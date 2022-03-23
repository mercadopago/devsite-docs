## Create preference

It is possible to create Preferences using the SDK below. For details on request parameters, check the [Create preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post) API.

----[mla, mlb, mlu, mpe, mlm]----

[[[
```ruby
# Mercado Pago SDK
require 'mercadopago'

# Add Your credentials
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')

# Create a preference request
preference_data = {
  items: [
    {
      title: 'My Item',
      unit_price: 75.56,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# This value replaces the String "<%= @preference_id %>" in your HTML
@preference_id = preference['id']
```
]]]

------------

----[mlc, mco]----

[[[
```ruby
# Mercado Pago SDK
require 'mercadopago'

# Add Your credentials
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')

# Create a preference request
preference_data = {
  items: [
    {
      title: 'My Item',
      unit_price: 75,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# This value replaces the String "<%= @preference_id %>" in your HTML
@preference_id = preference['id']
```
]]]

------------