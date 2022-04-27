## Create preference

It is possible to create Preferences using the SDK below. For details on request parameters, check the [Create preference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post) API.

----[mla, mlb, mlu, mpe, mlm]----

[[[
```python
# Mercado Pago SDK
import mercadopago

# Add Your credentials
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")

# Create a preference item
preference_data = {
    "items": [
        {
            "title": "My Item",
            "quantity": 1,
            "unit_price": 75.76
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
]]]

------------

----[mlc, mco]----

[[[
```python
# Mercado Pago SDK
import mercadopago

# Add Your credentials
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")

# Create a preference object
preference_data = {
    "items": [
        {
            "title": "My Item",
            "quantity": 1,
            "unit_price": 75
            
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
]]]

------------