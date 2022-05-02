# Create preference

It is possible to create Preferences using the SDK below. For details on request parameters, check the [Create preference](/developers/en/reference/preferences/_checkout_preferences/post) API.

----[mla, mlb, mlu, mpe, mlm]----

[[[
```dotnet
// Mercado Pago SDK
using MercadoPago.Config;
using MercadoPago.Client.Preference;
using MercadoPago.Resource.Preference;
// Add Your credentials
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";
// Create the preference request object
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "My Item",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75.56m,
        },
    },
};
// Create the preference using the client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
]]]

------------

----[mlc, mco]----

[[[
```dotnet
// Mercado Pago SDK
using MercadoPago.Config;
using MercadoPago.Client.Preference;
using MercadoPago.Resource.Preference;
// Add Your credentials
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";
// Create the preference request object
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "My Item",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75m,
        },
    },
};
// Create the preference using the client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
]]]

------------

## Associate Facebook Ads

You can associate the preference with a pixel to track the conversions of Facebook ads. To obtain details about the request parameters, consult the API [Create Preference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post).

[[[
```dotnet
===
Add the following code in the preference and replace the <code>pixel_id</code> value with its identifier.
===
// Associate your Facebook pixel
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

## Associate Google Ads

You can associate a tag with your preference for tracking Google Ads conversions. For details on request parameters, check the API [Create Preference](/developers/en/reference/preferences/_checkout_preferences/post).

[[[
```dotnet
===
Add the code in the preference and replace the <code>CONVERSION\_ID</code> and <code>CONVERSION\_LABEL</code> values with the data from your tag.
===
// Associate your tag
var tracks = new List<PreferenceTrackRequest>
{
    new PreferenceTrackRequest
    {
        Type = "facebook_ad",
        Values = new PreferenceTrackValuesRequest
        {
            ConversionId = "CONVERSION_ID",
            ConversionLabel = "CONVERSION_LABEL",
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