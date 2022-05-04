## Crear preferencia

Es posible crear preferencias utilizando lo SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API [Crear preferencia](/developers/es/reference/preferences/_checkout_preferences/post).

----[mla, mlb, mlu, mpe, mlm]----

[[[
```python
# SDK de Mercado Pago
import mercadopago
# Agrega credenciales
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")
# Crea un ítem en la preferencia
preference_data = {
    "items": [
        {
            "title": "Mi producto",
            "quantity": 1,
            "unit_price": 75.76,
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
# SDK de Mercado Pago
import mercadopago
# Add Your credentials
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")
# Crea un ítem en la preferencia
preference_data = {
    "items": [
        {
            "title": "Mi producto",
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

# Asociar Facebook Ads

Puede asociar la preferencia con un píxel para rastrear las conversiones de anuncios de Facebook. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Crear preferencia](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post).

[[[
```dotnet
===
Agrega el código en la preferencia y reemplaza el valor <code>PIXEL_ID</code> por tu identificador.
===
// Asocia tu píxel de Facebook
var tracks = new List<PreferenceTrackRequest>
{
    new PreferenceTrackRequest
    {
        Type = "facebook_ad",
        Values = new PreferenceTrackValuesRequest
        {
            PixelId = "PIXEL_ID",
        },
    },
};
var request = new PreferenceRequest
{
    // ...
    Tracks = tracks,
};
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
]]]

# Asociar Google Ads

[[[
```python
===
Agrega el código en la preferencia y reemplaza los valores <code>CONVERSION\_ID</code> y <code>CONVERSION\_LABEL</code> por los datos de tu _tag_.
===
# Asocia tu tag
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