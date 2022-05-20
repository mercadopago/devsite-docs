# Criar preferência

É possível criar uma preferência utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar preferência](/developers/pt/reference/preferences/_checkout_preferences/post).

----[mla, mlb, mlu, mpe, mlm]----

[[[
```dotnet
// SDK do Mercado Pago
using MercadoPago.Config;
using MercadoPago.Client.Preference;
using MercadoPago.Resource.Preference;
// Configure as credenciais
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";
// Crie o objeto de request da preferência
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Meu produto",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75.56m,
        },
    },
};
// Crie a preferência usando o client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
]]]

------------

----[mlc, mco]----

[[[
```dotnet
// SDK do Mercado Pago
using MercadoPago.Config;
using MercadoPago.Client.Preference;
using MercadoPago.Resource.Preference;
// Configure as credenciais
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";
// Crie o objeto de request da preferência
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Meu produto",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75m,
        },
    },
};
// Crie a preferência usando o client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
]]]

------------

## Associar Facebook Ads

É possível associar a preferência a um pixel para acompanhamento das conversões do Facebook Ads. Para detalhamento dos parâmetros de requisição, verifique a API [Criar preferência](/developers/pt/reference/preferences/_checkout_preferences/post).

[[[
```dotnet
===
Adicione o código na preferência e substitua o valor <code>pixel_id</code> pelo seu identificador.
===
// Associe seu pixel do Facebook
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

## Associar Google Ads

É possível associar uma tag à preferência para acompanhamento das conversões do Google Ads. Para detalhamento dos parâmetros de requisição, verifique a API [Criar preferência](/developers/pt/reference/preferences/_checkout_preferences/post).

[[[
```csharp
===
Adicione o código na preferência e substitua os valores <code>CONVERSION\_ID</code> e <code>CONVERSION\_LABEL</code> pelos dados da sua _tag_.
===
// Associe sua tag do Google ads
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