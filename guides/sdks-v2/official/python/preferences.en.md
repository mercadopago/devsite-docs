## Create preference

It is possible to create Preferences using the SDK below. For details on request parameters, check the [Create preference](/developers/en/reference/preferences/_checkout_preferences/post) API.

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

## Associate Facebook Ads

You can associate the preference with a pixel to track the conversions of Facebook ads. To obtain details about the request parameters, consult the API [Create Preference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post).

[[[
```python
===
Add the following code in the preference and replace the <code>pixel_id</code> value with its identifier.
===
# Associate your Facebook Pixel
preference_data = {
    # ...
    "tracks": [
        {
            "type": "facebook_ad",
            "values": {
                "pixel_id": "PIXEL_ID"
            }
        }
    ]
}
preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
]]]

## Associate Google Ads

You can associate a tag with your preference for tracking Google Ads conversions. For details on request parameters, check the API [Create Preference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post).

[[[
```python
===
Add the code in the preference and replace the <code>CONVERSION\_ID</code> and <code>CONVERSION\_LABEL</code> values with the data from your tag.
===
# Associate your tag
preference_data = {
    # ...
    "tracks": [
        {
            "type": "google_ad",
            "values": {
                "conversion_id": "CONVERSION_ID",
                "conversion_label": "CONVERSION_LABEL"
            }
        }
    ]
}
preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
]]]