# Crear preferencia

Es posible crear preferencias utilizando lo SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API [Crear preferencias](/developers/es/reference/preferences/_checkout_preferences/post).

[[[
```ruby
preference_data = {
  items: [
    {
      title: 'Blue shirt',
      quantity: 10,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: [FAKER][COMMERCE][PRICE]
    }
  ],
  payer: {
    email: 'john@yourdomain.com'
  }
}

preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]
```
]]]